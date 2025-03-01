import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./blogItem.html";
const PILL_STYLES = {
  'pill-purple': 'background-color: #fff; color: purple; border: 1px solid #d8dde6;',
  'pill-orange': 'background-color: #fff; color: orange; border: 1px solid #d8dde6;',
  'pill-pink': 'background-color: #fff; color: darkred; border: 1px solid #d8dde6;'
  // Add more mappings as needed
};
class BlogItem extends LightningElement {
  constructor(...args) {
    super(...args);
    this.imageUrl = void 0;
    // e.g. '/assets/blog.jpg'
    this.title = void 0;
    // Blog title
    this.summary = void 0;
    // Summary text
    this.isNew = void 0;
    // Whether to show the "New" pill
    this.categories = [];
    // Array of category strings
    this.pillClass = void 0;
  }
  // Custom CSS class key for styling the pills

  // Returns an inline style string based on pillClass using the mapping object.
  get pillStyle() {
    return PILL_STYLES[this.pillClass] || '';
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
    pillClass: {
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