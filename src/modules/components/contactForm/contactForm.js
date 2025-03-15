import { LightningElement, track } from 'lwc';

export default class ContactForm extends LightningElement {
  @track name = '';
  @track email = '';
  @track subject = '';
  @track message = '';
  @track website = ''; // Honeypot field
  
  @track isSubmitting = false;
  @track isSuccess = false;
  @track isError = false;
  
  // EmailJS configuration - these would be set in your environment
  emailjsPublicKey = 'YOUR_EMAILJS_PUBLIC_KEY';
  emailjsServiceId = 'YOUR_EMAILJS_SERVICE_ID';
  emailjsTemplateId = 'YOUR_EMAILJS_TEMPLATE_ID';
  
  connectedCallback() {
    // Load EmailJS script dynamically
    if (!window.emailjs) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.async = true;
      script.onload = () => {
        window.emailjs.init(this.emailjsPublicKey);
      };
      document.head.appendChild(script);
    } else {
      window.emailjs.init(this.emailjsPublicKey);
    }
  }
  
  handleInputChange(event) {
    const field = event.target.name;
    this[field] = event.target.value;
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    // Check if honeypot field is filled (spam bot)
    if (this.website) {
      console.log('Spam submission detected');
      this.simulateSuccess();
      return;
    }
    
    // Validate form
    const form = this.template.querySelector('form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    
    this.isSubmitting = true;
    
    // Prepare template parameters
    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      subject: this.subject || 'Contact Form Submission',
      message: this.message
    };
    
    // Send email using EmailJS
    window.emailjs.send(
      this.emailjsServiceId,
      this.emailjsTemplateId,
      templateParams
    )
    .then(() => {
      this.showSuccess();
      this.resetForm();
    })
    .catch(error => {
      console.error('EmailJS error:', error);
      this.showError();
    })
    .finally(() => {
      this.isSubmitting = false;
    });
  }
  
  // For spam submissions, simulate success without sending email
  simulateSuccess() {
    setTimeout(() => {
      this.showSuccess();
      this.resetForm();
    }, 1000);
  }
  
  showSuccess() {
    this.isSuccess = true;
    this.isError = false;
  }
  
  showError() {
    this.isError = true;
    this.isSuccess = false;
  }
  
  closeNotification() {
    this.isSuccess = false;
    this.isError = false;
  }
  
  resetForm() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
    this.website = '';
  }
}