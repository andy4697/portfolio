import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./sidebar.html";
class SideBar extends LightningElement {
  constructor(...args) {
    super(...args);
    this.isMenuOpen = false;
  }
  get mobileMenuClass() {
    return this.isMenuOpen ? 'mobile-menu-overlay mobile-menu-open' : 'mobile-menu-overlay';
  }
  connectedCallback() {
    // Component initialization logic when connected to the DOM
  }
  renderedCallback() {
    // Get all navigation items after the component has rendered
    const navItems = this.template.querySelectorAll('.nav-item');

    // Add click event listener to each navigation item
    navItems.forEach(item => {
      item.addEventListener('click', this.handleNavItemClick.bind(this));
    });

    // Set active page on load
    this.setActivePageFromUrl();
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Prevent body scrolling when menu is open on mobile
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  handleBackdropClick(event) {
    // Close menu when clicking outside on mobile
    if (event.target === event.currentTarget) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
  stopPropagation(event) {
    // Prevent clicks inside the menu from closing it via backdrop
    event.stopPropagation();
  }
  closeMenuIfNotExcluded(event) {
    // Check if the click was on or within an excluded element
    const isExcluded = event.target.closest('.exclude-from-close');
    if (!isExcluded && window.innerWidth <= 768) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
  handleNavItemClick(event) {
    // Get all navigation items
    const navItems = this.template.querySelectorAll('.nav-item');

    // Remove active class from all items
    navItems.forEach(navItem => {
      navItem.classList.remove('slds-is-active');
    });

    // Add active class to clicked item
    event.currentTarget.classList.add('slds-is-active');

    // Close mobile menu if we're on mobile
    if (window.innerWidth <= 768) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
  setActivePageFromUrl() {
    const currentPath = window.location.pathname;
    const navItems = this.template.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      const itemPath = item.getAttribute('href');
      if (currentPath.includes(itemPath) || currentPath.endsWith('/') && item.getAttribute('data-page') === 'home') {
        item.classList.add('slds-is-active');
      } else {
        item.classList.remove('slds-is-active');
      }
    });
  }
  handleThemeChange(event) {
    // Forward the theme change event to parent
    this.dispatchEvent(new CustomEvent('themechange', {
      detail: event.detail
    }));
  }
  /*LWC compiler v8.14.0*/
}
_registerDecorators(SideBar, {
  track: {
    isMenuOpen: 1
  }
});
const __lwc_component_class_internal = _registerComponent(SideBar, {
  tmpl: _tmpl,
  sel: "-sidebar",
  apiVersion: 63
});
export default __lwc_component_class_internal;