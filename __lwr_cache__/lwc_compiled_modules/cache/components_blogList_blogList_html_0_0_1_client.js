import _implicitStylesheets from "./blogList.css";
import _implicitScopedStylesheets from "./blogList.scoped.css?scoped=true";
import _componentsBlogItem from "components/blogItem";
import {freezeTemplate, registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-p-horizontal_medium": true,
    "slds-m-top_xx-large": true
  },
  key: 0
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, c: api_custom_element, i: api_iterator, h: api_element} = $api;
  return [api_element("div", stc0, api_iterator($cmp.blogs, function (blog) {
    return api_custom_element("components-blog-item", _componentsBlogItem, {
      props: {
        "imageUrl": blog.imageUrl,
        "title": blog.title,
        "summary": blog.summary,
        "isNew": blog.isNew,
        "categories": blog.categories,
        "pillClass": blog.pillClass
      },
      key: api_key(1, blog.id)
    });
  }))];
  /*LWC compiler v8.14.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-67pc0ibd5vu";
tmpl.legacyStylesheetToken = "undefined-blogList_blogList";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
