import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./blogList.html";
class BlogList extends LightningElement {
  constructor(...args) {
    super(...args);
    this.blogs = [{
      id: 1,
      imageUrl: '/public/assets/blog.jpg',
      title: 'Demo Post 1',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isNew: true,
      categories: ['Salesforce', 'Rust'],
      pillClass: 'pill-purple'
    }, {
      id: 2,
      imageUrl: '/public/assets/blog.jpg',
      title: 'Demo Post 2',
      summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isNew: false,
      categories: ['Go', 'DevOps'],
      pillClass: 'pill-orange'
    }, {
      id: 3,
      imageUrl: '/public/assets/blog.jpg',
      title: 'Demo Post 3',
      summary: 'Consectetur adipiscing elit, sed do eiusmod tempor.',
      isNew: true,
      categories: ['Rust', 'Go'],
      pillClass: 'pill-pink'
    }];
  }
  /*LWC compiler v8.14.0*/
}
_registerDecorators(BlogList, {
  fields: ["blogs"]
});
const __lwc_component_class_internal = _registerComponent(BlogList, {
  tmpl: _tmpl,
  sel: "-blog-list",
  apiVersion: 63
});
export default __lwc_component_class_internal;