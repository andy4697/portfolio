import { LightningElement } from 'lwc';

export default class SideBar extends LightningElement {
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

    handleNavItemClick(event) {
        // Get all navigation items
        const navItems = this.template.querySelectorAll('.nav-item');
        
        // Remove active class from all items
        navItems.forEach(navItem => {
            navItem.classList.remove('slds-is-active');
        });
        
        // Add active class to clicked item
        event.currentTarget.classList.add('slds-is-active');
        
        // Load content dynamically
        const page = event.currentTarget.getAttribute('data-page');
        this.loadContent(page);
    }

    setActivePageFromUrl() {
        const currentPath = window.location.pathname;
        const navItems = this.template.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            const itemPath = item.getAttribute('href');
            if (currentPath.includes(itemPath) || 
                (currentPath.endsWith('/') && item.getAttribute('data-page') === 'home')) {
                item.classList.add('slds-is-active');
            } else {
                item.classList.remove('slds-is-active');
            }
        });
    }

    loadContent(page) {
        const contentArea = this.template.querySelector('.content-area');
        fetch(`/pages/${page}/${page}.html`)
            .then(response => response.text())
            .then(html => {
                contentArea.innerHTML = html;
            })
            .catch(error => console.error('Error loading page:', error));
    }
}