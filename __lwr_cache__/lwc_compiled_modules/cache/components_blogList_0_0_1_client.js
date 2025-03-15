import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./blogList.html";
class BlogList extends LightningElement {
  constructor(...args) {
    super(...args);
    this.isHomePage = false;
    this.blogs = [{
      id: 1,
      imageUrl: '/public/assets/blog.jpg',
      title: 'Demo Post 1',
      slug: 'demo-post-1',
      // Make sure slug matches your markdown file name
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isNew: true,
      isHome: true,
      categories: ['Salesforce', 'Rust'],
      pillColor: 'purple'
    }, {
      id: 2,
      imageUrl: '/public/assets/blog.jpg',
      title: 'Demo Post 2',
      slug: 'demo-post-2',
      // Make sure slug matches your markdown file name
      summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isNew: false,
      isHome: true,
      categories: ['Go', 'DevOps'],
      pillColor: 'orange'
    }, {
      id: 3,
      imageUrl: '/public/assets/blog.jpg',
      title: 'Demo Post 3',
      slug: 'demo-post-3',
      // Make sure slug matches your markdown file name
      summary: 'Consectetur adipiscing elit, sed do eiusmod tempor.',
      isNew: true,
      isHome: false,
      categories: ['Rust', 'Go'],
      pillColor: 'pink'
    }];
  }
  get displayedBlogs() {
    return this.isHomePage ? this.blogs.filter(blog => blog.isHome) : this.blogs;
  }
  /*LWC compiler v8.14.0*/
}
_registerDecorators(BlogList, {
  publicProps: {
    isHomePage: {
      config: 0
    }
  },
  fields: ["blogs"]
});
const __lwc_component_class_internal = _registerComponent(BlogList, {
  tmpl: _tmpl,
  sel: "-blog-list",
  apiVersion: 63
});
export default __lwc_component_class_internal;