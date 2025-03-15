import _implicitStylesheets from "./blogs.css";
import _implicitScopedStylesheets from "./blogs.scoped.css?scoped=true";
import _componentsBlogList from "components/blogList";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h1 class="blogs-title slds-text-heading_large slds-m-bottom_medium${0}"${2}>Blogs</h1>`;
const stc0 = {
  classMap: {
    "blogs-container": true,
    "slds-p-around_medium": true
  },
  key: 0
};
const stc1 = {
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, c: api_custom_element, h: api_element} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2), api_custom_element("components-blog-list", _componentsBlogList, stc1)])];
  /*LWC compiler v8.14.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-6vl5ilctk5n";
tmpl.legacyStylesheetToken = "undefined-blogs_blogs";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
