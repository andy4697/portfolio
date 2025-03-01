import { LightningElement } from 'lwc';

export default class BlogList extends LightningElement {
    blogs = [
        {
            id: 1,
            imageUrl: '/public/assets/blog.jpg',
            title: 'Demo Post 1',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            isNew: true,
            categories: ['Salesforce', 'Rust'],
            pillClass: 'pill-purple'
        },
        {
            id: 2,
            imageUrl: '/public/assets/blog.jpg',
            title: 'Demo Post 2',
            summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            isNew: false,
            categories: ['Go', 'DevOps'],
            pillClass: 'pill-orange'
        },
        {
            id: 3,
            imageUrl: '/public/assets/blog.jpg',
            title: 'Demo Post 3',
            summary: 'Consectetur adipiscing elit, sed do eiusmod tempor.',
            isNew: true,
            categories: ['Rust', 'Go'],
            pillClass: 'pill-pink'
        }
    ];
}