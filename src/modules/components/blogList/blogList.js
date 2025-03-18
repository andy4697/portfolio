import { LightningElement, api } from 'lwc';

export default class BlogList extends LightningElement {
    @api isHomePage = false;
    
    blogs = [
        {
            id: 1,
            imageUrl: '/public/assets/blog.jpg',
            title: 'Demo Post 1',
            slug: 'demo-post-1',  // Make sure slug matches your markdown file name
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            isNew: true,
            isHome: true,
            categories: ['Salesforce', 'Rust'],
            pillColor: 'purple'
        },
        {
            id: 2,
            imageUrl: '/public/assets/blog.jpg',
            title: 'Demo Post 2',
            slug: 'demo-post-2',  // Make sure slug matches your markdown file name
            summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            isNew: false,
            isHome: true,
            categories: ['Go', 'DevOps'],
            pillColor: 'orange'
        },
        {
            id: 3,
            imageUrl: '/public/assets/blog.jpg',
            title: 'Demo Post 3',
            slug: 'demo-post-3',  // Make sure slug matches your markdown file name
            summary: 'Consectetur adipiscing elit, sed do eiusmod tempor.',
            isNew: true,
            isHome: false,
            categories: ['Rust', 'Go'],
            pillColor: 'pink'
        }
    ];

    get displayedBlogs() {
        return this.isHomePage ? this.blogs.filter(blog => blog.isHome) : this.blogs;
    }
}