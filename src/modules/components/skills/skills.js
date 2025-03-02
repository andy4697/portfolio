import { LightningElement, track } from 'lwc';

export default class Skills extends LightningElement {
    @track technologies = [
        {
            id: '1',
            name: 'HTML',
            iconClass: 'fa-brands fa-html5'
        },
        {
            id: '2',
            name: 'CSS',
            iconClass: 'fa-brands fa-css3-alt'
        },
        {
            id: '3',
            name: 'JavaScript',
            iconClass: 'fa-brands fa-js'
        },
        {
            id: '4',
            name: 'TypeScript',
            // No official TypeScript icon in Font Awesome, so you might pick something close:
            // e.g., use a generic "fa-brands fa-js" or a custom icon. For demonstration:
            iconClass: 'fa-brands fa-js'
        },
        {
            id: '5',
            name: 'React',
            iconClass: 'fa-brands fa-react'
        },
        {
            id: '6',
            name: 'Node.js',
            iconClass: 'fa-brands fa-node-js'
        },
        {
            id: '7',
            name: 'Git',
            iconClass: 'fa-brands fa-git-alt'
        },
        {
            id: '8',
            name: 'GitHub',
            iconClass: 'fa-brands fa-github'
        }
        // ...Add more technologies with their respective Font Awesome classes
    ];
}