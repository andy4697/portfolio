import { LightningElement, track } from 'lwc';

export default class ToggleTheme extends LightningElement {
    @track isDarkTheme = false;

    get iconClass() {
        return this.isDarkTheme ? 'fas fa-sun' : 'fas fa-moon';
    }

    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        const themeEvent = new CustomEvent('themechange', { detail: { isDark: this.isDarkTheme } });
        this.dispatchEvent(themeEvent);
        
        const button = this.template.querySelector('button');
        button.classList.toggle('slds-button_icon-inverse', this.isDarkTheme);
    }
} 