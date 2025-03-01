import { LightningElement, api } from 'lwc';

const PILL_STYLES = {
    'pill-purple': 'background-color: #fff; color: purple; border: 1px solid #d8dde6;',
    'pill-orange': 'background-color: #fff; color: orange; border: 1px solid #d8dde6;',
    'pill-pink': 'background-color: #fff; color: darkred; border: 1px solid #d8dde6;'
    // Add more mappings as needed
};

export default class BlogItem extends LightningElement {
    @api imageUrl;        // e.g. '/assets/blog.jpg'
    @api title;           // Blog title
    @api summary;         // Summary text
    @api isNew;           // Whether to show the "New" pill
    @api categories = []; // Array of category strings
    @api pillClass;       // Custom CSS class key for styling the pills

    // Returns an inline style string based on pillClass using the mapping object.
    get pillStyle() {
        return PILL_STYLES[this.pillClass] || '';
    }
}