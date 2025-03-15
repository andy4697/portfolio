import _implicitStylesheets from "./blogList.css";
import _implicitScopedStylesheets from "./blogList.scoped.css?scoped=true";
import _componentsBlogItem from "components/blogItem";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="text-center${0}"${2}><a href="/blogs" class="view-all-button${0}"${2}>View All Blogs</a></div>`;
const stc0 = {
  classMap: {
    "blogs-list-container": true
  },
  key: 0
};
const stc1 = {
  "blog-item-wrapper": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, c: api_custom_element, h: api_element, i: api_iterator, st: api_static_fragment} = $api;
  return [api_element("div", stc0, api_iterator($cmp.displayedBlogs, function (blog) {
    return api_element("div", {
      classMap: stc1,
      key: api_key(1, blog.id)
    }, [api_custom_element("components-blog-item", _componentsBlogItem, {
      props: {
        "imageUrl": blog.imageUrl,
        "title": blog.title,
        "summary": blog.summary,
        "isNew": blog.isNew,
        "categories": blog.categories,
        "pillColor": blog.pillColor,
        "slug": blog.slug
      },
      key: 2
    })]);
  })), $cmp.isHomePage ? api_static_fragment($fragment1, 4) : null];
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
