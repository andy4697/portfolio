import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./toggleTheme.html";
class ToggleTheme extends LightningElement {
  constructor(...args) {
    super(...args);
    this.isDarkTheme = false;
  }
  get iconClass() {
    return this.isDarkTheme ? 'fas fa-sun' : 'fas fa-moon';
  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const themeEvent = new CustomEvent('themechange', {
      detail: {
        isDark: this.isDarkTheme
      }
    });
    this.dispatchEvent(themeEvent);
    const button = this.template.querySelector('button');
    button.classList.toggle('slds-button_icon-inverse', this.isDarkTheme);
  }
  /*LWC compiler v8.14.0*/
}
_registerDecorators(ToggleTheme, {
  track: {
    isDarkTheme: 1
  }
});
const __lwc_component_class_internal = _registerComponent(ToggleTheme, {
  tmpl: _tmpl,
  sel: "-toggle-theme",
  apiVersion: 63
});
export default __lwc_component_class_internal;