import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./toggleTheme.html";
class ToggleTheme extends LightningElement {
  constructor(...args) {
    super(...args);
    this.isDarkMode = false;
  }
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
      detail: {
        theme: 'dark'
      }
    }));
  }
  setLightMode() {
    this.isDarkMode = false;
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');

    // Dispatch custom event for parent components to react to theme change
    this.dispatchEvent(new CustomEvent('themechange', {
      detail: {
        theme: 'light'
      }
    }));
  }
  /*LWC compiler v8.14.0*/
}
_registerDecorators(ToggleTheme, {
  fields: ["isDarkMode"]
});
const __lwc_component_class_internal = _registerComponent(ToggleTheme, {
  tmpl: _tmpl,
  sel: "-toggle-theme",
  apiVersion: 63
});
export default __lwc_component_class_internal;