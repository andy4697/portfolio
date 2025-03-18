import { LightningElement, api } from 'lwc';

export default class ToastService extends LightningElement {
    @api variant = 'info';
    @api title = '';
    @api message = '';
    
    isVisible = false;
    toastTimeout;
    
    @api
    showToast(variant, title, message) {
        if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
        }
        
        this.variant = variant || 'info';
        this.title = title || '';
        this.message = message || '';
        this.isVisible = true;
    }
    
    @api
    hideToast() {
        this.isVisible = false;
        if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
            this.toastTimeout = null;
        }
    }
    
    disconnectedCallback() {
        if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
        }
    }
    
    get containerClasses() {
        return `slds-notify_container ${this.isVisible ? 'slds-is-visible' : ''}`;
    }
    
    get toastClasses() {
        return `slds-notify slds-notify_toast slds-theme_${this.variant}`;
    }
    
    get isSuccess() {
        return this.variant === 'success';
    }
    
    get isError() {
        return this.variant === 'error';
    }
}
