import { LightningElement } from 'lwc';

export default class Work extends LightningElement {
    // This component just serves as a container for the other components
    connectedCallback() {
        // Ensure proper layout initialization
        requestAnimationFrame(() => {
            const container = this.template.querySelector('.resume-container');
            if (container) {
                container.style.opacity = '1';
            }
        });
    }
}