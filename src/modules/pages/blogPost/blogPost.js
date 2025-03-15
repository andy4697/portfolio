import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';

export default class BlogPost extends LightningElement {
    blogData = {
        title: '',
        content: '',
        publishDate: '',
        categories: [],
        featuredImage: '/public/assets/blog.jpg',
        readingTime: '5',
        author: 'Anudeep Appikatla',
        authorImage: '/public/assets/profile.jpg',
        authorTwitter: '',
        authorLinkedIn: ''
    };
    error;
    currentSlug;

    connectedCallback() {
        // Add immediate path check
        const fullPath = window.location.pathname;
        console.log('Initial path check:', fullPath);
        this.checkAndLoadContent(fullPath);
    }

    @wire(CurrentPageReference)
    async pageRef(pageReference) {
        if (pageReference) {
            console.log('PageReference details:', pageReference);
            const fullPath = window.location.pathname;
            this.checkAndLoadContent(fullPath);
        }
    }

    checkAndLoadContent(fullPath) {
        console.log('Checking path:', fullPath);
        const matches = fullPath.match(/\/blog\/([^/]+)$/);
        const slug = matches ? matches[1] : null;
        
        console.log('Extracted slug:', slug);
        
        if (slug && slug !== this.currentSlug) {
            this.currentSlug = slug;
            this.loadBlogContent(slug);
        }
    }

    async loadBlogContent(slug) {
        try {
            const url = `/src/content/blogs/${slug}.md`;
            console.log('Fetching content from:', url);
            
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const markdown = await response.text();
            console.log('Received markdown length:', markdown.length);
            
            const { data, content } = this.parseFrontMatter(markdown);
            console.log('Parsed frontmatter data:', data);
            
            // Update blogData with all fields
            this.blogData = {
                ...this.blogData,
                title: data.title || 'Untitled Post',
                content: content || 'No content available',
                publishDate: data.publishDate || new Date().toISOString(),
                categories: Array.isArray(data.categories) ? data.categories : [],
                featuredImage: data.featuredImage || '/public/assets/blog.jpg',
                readingTime: this.calculateReadingTime(content).toString(),
                author: data.author || 'Anudeep Appikatla',
                authorImage: data.authorImage || '/public/assets/profile.jpg',
                authorTwitter: data.authorTwitter || '',
                authorLinkedIn: data.authorLinkedIn || ''
            };
            
            console.log('Updated blogData:', this.blogData);
        } catch (error) {
            console.error('Error loading blog content:', error);
            this.error = `Failed to load blog post: ${error.message}`;
        }
    }

    parseFrontMatter(markdown) {
        try {
            const parts = markdown.split('---');
            
            if (parts.length >= 3) {
                const frontmatter = parts[1].trim();
                const content = parts.slice(2).join('---').trim();
                
                const data = {};
                frontmatter.split('\n').forEach(line => {
                    const [key, ...value] = line.split(':');
                    if (key && value.length) {
                        let processedValue = value.join(':').trim();
                        // Handle arrays in frontmatter
                        if (processedValue.startsWith('[') && processedValue.endsWith(']')) {
                            processedValue = processedValue
                                .slice(1, -1)
                                .split(',')
                                .map(item => item.trim().replace(/['"]/g, ''));
                        }
                        data[key.trim()] = processedValue;
                    }
                });
                
                return { data, content };
            }
        } catch (error) {
            console.error('Error parsing frontmatter:', error);
        }
        return { data: {}, content: markdown };
    }

    calculateReadingTime(content) {
        const wordsPerMinute = 200;
        const words = content.trim().split(/\s+/).length;
        return Math.ceil(words / wordsPerMinute);
    }
}