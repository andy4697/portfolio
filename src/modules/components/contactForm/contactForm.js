import { LightningElement, track } from 'lwc';
import { config } from 'config/environment';
import { loadEmailJs, sendEmail } from 'services/emailJsService';
import { logger } from 'utils/logger';

export default class ContactForm extends LightningElement {
    @track formData = {
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '' // Honeypot field
    };
    
    @track formState = {
        isSubmitting: false,
        errors: {},
        hasToast: false
    };

    // EmailJS Configuration from Netlify environment
    emailJsConfig = {
        publicKey: config.emailJs.publicKey,
        serviceId: config.emailJs.serviceId,
        contactTemplateId: config.emailJs.contactTemplateId,
        autoReplyTemplateId: config.emailJs.autoReplyTemplateId
    };

    emailJsReadyPromise = null;
    emailJsReady = false;
    
    connectedCallback() {
        this.emailJsReadyPromise = this.initializeEmailJs();
    }
    
    handleInputChange(event) {
        const { name, value } = event.target;
        this.formData = { ...this.formData, [name]: value };
        
        if (this.formState.errors[name]) {
            this.formState.errors = {
                ...this.formState.errors,
                [name]: ''
            };
        }
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        
        // Honeypot check
        if (this.formData.website) {
            return;
        }
        
        if (!this.validateForm()) {
            this.showToast('error', 'Validation Error', 'Please check the form for errors.');
            return;
        }
        
        if (!this.emailJsConfig.publicKey || !this.emailJsConfig.serviceId || 
            !this.emailJsConfig.contactTemplateId || !this.emailJsConfig.autoReplyTemplateId) {
            
            // Show detailed error only in development
            const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            const debugInfo = isDev ? 
                `Missing: ${!this.emailJsConfig.publicKey ? 'PublicKey ' : ''}${!this.emailJsConfig.serviceId ? 'ServiceId ' : ''}${!this.emailJsConfig.contactTemplateId ? 'ContactTemplate ' : ''}${!this.emailJsConfig.autoReplyTemplateId ? 'AutoReplyTemplate' : ''}` :
                '';
            
            this.showToast('error', 'Configuration Error', 
                `Email service is not configured. Please try again later. ${debugInfo}`);
            return;
        }

        try {
            // Ensure EmailJS is loaded before sending
            if (!this.emailJsReadyPromise) {
                this.emailJsReadyPromise = this.initializeEmailJs();
            }
            await this.emailJsReadyPromise;
            if (!this.emailJsReady) {
                this.showToast('error', 'Error', 'Email service is unavailable. Please try again later.');
                return;
            }
        } catch (loadError) {
            logger.error('EmailJS load error:', loadError);
            this.showToast('error', 'Error', 'Email service failed to initialize. Please try again later.');
            return;
        }

        this.formState.isSubmitting = true;
        
        try {
            const contactParams = {
                subject: this.formData.subject || 'Contact Form Inquiry',
                from_name: this.formData.name,
                message: this.formData.message,
                email: this.formData.email
            };
            
            const autoReplyParams = {
                email: this.formData.email,
                name: this.formData.name
            };

            const results = await Promise.all([
                sendEmail(
                    this.emailJsConfig.serviceId,
                    this.emailJsConfig.contactTemplateId,
                    contactParams
                ),
                sendEmail(
                    this.emailJsConfig.serviceId,
                    this.emailJsConfig.autoReplyTemplateId,
                    autoReplyParams
                )
            ]);

            if (results[0].status === 200 && results[1].status === 200) {
                this.showToast('success', 'Success', 'Thank you! Your message has been sent successfully.');
                // Reset form after a slight delay
                setTimeout(() => {
                    this.resetForm();
                }, 5000);
            } else {
                throw new Error('Failed to send one or more emails');
            }
        } catch (error) {
            logger.error('EmailJS send failed:', error);
            this.showToast('error', 'Error', 'Failed to send message. Please try again.');
        } finally {
            this.formState.isSubmitting = false;
        }
    }
    
    async initializeEmailJs() {
        try {
            await loadEmailJs(this.emailJsConfig.publicKey);
            this.emailJsReady = true;
        } catch (error) {
            this.emailJsReady = false;
            throw error;
        }
    }

    validateForm() {
        const errors = {};
        
        if (!this.formData.name.trim()) {
            errors.name = 'Name is required';
        }
        
        if (!this.formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!this.isValidEmail(this.formData.email)) {
            errors.email = 'Please enter a valid email address';
        }
        
        if (!this.formData.message.trim()) {
            errors.message = 'Message is required';
        }
        
        this.formState.errors = errors;
        return Object.keys(errors).length === 0;
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    resetForm() {
        this.formData = {
            name: '',
            email: '',
            subject: '',
            message: '',
            website: ''
        };
        this.formState.errors = {};
        
        // Reset all form inputs
        const form = this.template.querySelector('form');
        if (form) {
            form.reset();
        }
    }
    
    showToast(variant, title, message) {
        const toastService = this.template.querySelector('components-toast-service');
        if (toastService) {
            this.formState.hasToast = true;
            requestAnimationFrame(() => {
                toastService.showToast(variant, title, message);
                
                // Only auto-hide for success messages
                if (variant === 'success') {
                    setTimeout(() => {
                        this.hideToast();
                    }, 1200); // 5 seconds
                }
            });
        }
    }
    

    hideToast() {
        const toastService = this.template.querySelector('components-toast-service');
        if (toastService) {
            toastService.hideToast();
            this.formState.hasToast = false;
        }
    }
    
    // Getters
    get hasErrors() {
        return Object.keys(this.formState.errors).length > 0;
    }
    
    get nameError() {
        return this.formState.errors.name;
    }
    
    get emailError() {
        return this.formState.errors.email;
    }
    
    get messageError() {
        return this.formState.errors.message;
    }
    
    get isFormDisabled() {
        return this.formState.isSubmitting;
    }
    
    get nameFieldClass() {
        return `slds-form-element ${this.nameError ? 'slds-has-error' : ''}`;
    }
    
    get emailFieldClass() {
        return `slds-form-element ${this.emailError ? 'slds-has-error' : ''}`;
    }
    
    get messageFieldClass() {
        return `slds-form-element ${this.messageError ? 'slds-has-error' : ''}`;
    }

    get containerClasses() {
        return `form-container ${this.formState.hasToast ? 'show-toast' : ''}`;
    }


}