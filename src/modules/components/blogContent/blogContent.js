import { LightningElement, api } from 'lwc';
import { marked } from 'marked';
import { format } from 'date-fns';
import hljs from 'highlight.js';

export default class BlogContent extends LightningElement {
    @api title;
    @api content;
    @api author;
    @api authorImage;
    @api authorTwitter;
    @api authorLinkedIn;
    @api publishDate;
    @api categories = [];
    @api featuredImage;
    @api readingTime;

    _contentRendered = false;

    connectedCallback() {
        console.log('BlogContent connected with props:', {
            title: this.title,
            author: this.author,
            authorImage: this.authorImage,
            authorTwitter: this.authorTwitter,
            authorLinkedIn: this.authorLinkedIn,
            publishDate: this.publishDate,
            categories: this.categories,
            contentLength: this.content?.length
        });

        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            sanitize: false,
            highlight: function(code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    return hljs.highlight(code, { language: lang }).value;
                }
                return hljs.highlightAuto(code).value;
            }
        });
    }

    get formattedDate() {
        return this.publishDate ? format(new Date(this.publishDate), 'MMMM dd, yyyy') : '';
    }

    get twitterUrl() {
        return this.authorTwitter ? `https://twitter.com/${this.authorTwitter.replace('@', '')}` : null;
    }

    get linkedInUrl() {
        return this.authorLinkedIn || null;
    }

    get formattedCategories() {
        const colors = ['blue', 'green', 'orange', 'purple', 'pink'];
        return this.categories.map((category, index) => ({
            id: `category-${category}-${Math.random().toString(36).substr(2, 9)}`,
            name: category,
            class: `category-pill ${colors[index % colors.length]}`
        }));
    }

    @api
    refreshContent() {
        this._contentRendered = false;
        this.renderMarkdown();
    }

    renderedCallback() {
        console.log('BlogContent rendered with content length:', this.content?.length);
        this.renderMarkdown();
    }

    renderMarkdown() {
        if (this.content && !this._contentRendered) {
            const contentElement = this.template.querySelector('.markdown-content');
            if (contentElement) {
                contentElement.innerHTML = marked(this.content);
                this._contentRendered = true;
                console.log('Markdown content rendered successfully');
            }
        }
    }
}