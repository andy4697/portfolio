import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./blogItem.html";
class BlogItem extends LightningElement {
  constructor(...args) {
    super(...args);
    this.imageUrl = void 0;
    this.title = void 0;
    this.summary = void 0;
    this.isNew = void 0;
    this.categories = [];
    this.pillColor = 'blue';
    this.slug = void 0;
  }
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
  /*LWC compiler v8.14.0*/
}
_registerDecorators(BlogItem, {
  publicProps: {
    imageUrl: {
      config: 0
    },
    title: {
      config: 0
    },
    summary: {
      config: 0
    },
    isNew: {
      config: 0
    },
    categories: {
      config: 0
    },
    pillColor: {
      config: 0
    },
    slug: {
      config: 0
    }
  }
});
const __lwc_component_class_internal = _registerComponent(BlogItem, {
  tmpl: _tmpl,
  sel: "-blog-item",
  apiVersion: 63
});
export default __lwc_component_class_internal;