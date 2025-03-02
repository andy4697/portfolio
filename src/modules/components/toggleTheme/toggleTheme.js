import { LightningElement } from 'lwc';

export default class ToggleTheme extends LightningElement {
    isDarkMode = false;
    
    // Computed property for button title
    get buttonTitle() {
        return this.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
    
    connectedCallback() {
        // Check if user has a theme preference stored
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            this.setDarkMode();
        } else {
            this.setLightMode();
        }
        
        // Check if user has system preference for dark mode
        if (!storedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.setDarkMode();
        }
    }
    
    toggleTheme() {
        if (this.isDarkMode) {
            this.setLightMode();
        } else {
            this.setDarkMode();
        }
    }
    
    setDarkMode() {
        this.isDarkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        
        // Dispatch custom event for parent components to react to theme change
        this.dispatchEvent(new CustomEvent('themechange', {
            detail: { theme: 'dark' }
        }));
    }
    
    setLightMode() {
        this.isDarkMode = false;
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        
        // Dispatch custom event for parent components to react to theme change
        this.dispatchEvent(new CustomEvent('themechange', {
            detail: { theme: 'light' }
        }));
    }
}