import { LightningElement, api } from 'lwc';

export default class BlogItem extends LightningElement {
    @api imageUrl;
    @api title;
    @api summary;
    @api isNew;
    @api categories = [];
    @api pillColor = 'blue';
    @api slug;
    
    navigateToBlog() {
        // Add debugging
        console.log('Blog clicked:', {
            title: this.title,
            slug: this.slug
        });
        
        if (this.slug) {
            window.location.href = `/blog/${this.slug}`;
        } else {
            console.error('Navigation failed - Blog details:', {
                title: this.title,
                slug: this.slug,
                categories: this.categories
            });
        }
    }
    
    get formattedCategories() {
        return this.categories.map(category => {
            return {
                id: `category-${category}-${Math.random().toString(36).substr(2, 9)}`,
                name: category,
                class: `category-pill ${this.pillColor}`
            };
        });
    }

    // Add connected callback for debugging
    connectedCallback() {
        console.log('BlogItem connected:', {
            title: this.title,
            slug: this.slug
        });
    }
}