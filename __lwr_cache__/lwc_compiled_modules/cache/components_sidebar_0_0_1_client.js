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
    // Add event listener for window resize to handle responsive behavior
    window.addEventListener('resize', this.handleResize.bind(this));

    // Add event listener for navigation changes
    window.addEventListener('popstate', this.setActivePageFromUrl.bind(this));
  }
  disconnectedCallback() {
    // Clean up event listeners when component is removed
    window.removeEventListener('resize', this.handleResize.bind(this));
    window.removeEventListener('popstate', this.setActivePageFromUrl.bind(this));
  }
  handleResize() {
    // If window is resized to desktop width while mobile menu is open, close it
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
  renderedCallback() {
    // Set active page when component is rendered
    this.setActivePageFromUrl();

    // Add click event listeners to navigation links
    const navLinks = this.template.querySelectorAll('.custom-nav-link');
    navLinks.forEach(link => {
      link.removeEventListener('click', this.handleNavLinkClick);
      link.addEventListener('click', this.handleNavLinkClick.bind(this));
    });
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
  handleNavLinkClick(event) {
    // Close mobile menu if we're on mobile
    if (window.innerWidth <= 768) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
  setActivePageFromUrl() {
    const currentPath = window.location.pathname;
    const navLinks = this.template.querySelectorAll('.custom-nav-link');
    let activeFound = false;
    navLinks.forEach(link => {
      // Remove current attribute from all links
      link.removeAttribute('aria-current');
      const pageName = link.getAttribute('data-page');
      const linkPath = link.getAttribute('href');

      // Check if current path matches this link
      if (currentPath === '/' && pageName === 'home' || currentPath !== '/' && currentPath.includes(pageName)) {
        link.setAttribute('aria-current', 'page');
        activeFound = true;
      }
    });

    // If no active page was found, default to home
    if (!activeFound && navLinks.length > 0) {
      const homeLink = this.template.querySelector('[data-page="home"]');
      if (homeLink) {
        homeLink.setAttribute('aria-current', 'page');
      }
    }
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