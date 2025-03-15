import _implicitStylesheets from "./blogItem.css";
import _implicitScopedStylesheets from "./blogItem.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="blog-image-container${0}"${2}><img${"a1:src"}${"a1:alt"} class="blog-image${0}"${2}></div>`;
const $fragment2 = parseFragment`<span class="new-badge${0}"${2}>NEW</span>`;
const $fragment3 = parseFragment`<p class="blog-summary${0}"${2}>${"t1"}</p>`;
const $fragment4 = parseFragment`<span${"c0"}${2}>${"t1"}</span>`;
const stc0 = {
  "blog-item-container": true
};
const stc1 = [["cursor", "pointer", false]];
const stc2 = {
  classMap: {
    "blog-content": true
  },
  key: 3
};
const stc3 = {
  classMap: {
    "blog-title": true
  },
  key: 4
};
const stc4 = {
  classMap: {
    "category-pills": true
  },
  key: 9
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, sp: api_static_part, st: api_static_fragment, d: api_dynamic_text, t: api_text, h: api_element, ncls: api_normalize_class_name, k: api_key, i: api_iterator} = $api;
  const {_m0} = $ctx;
  return [api_element("div", {
    classMap: stc0,
    styleDecls: stc1,
    key: 0,
    on: _m0 || ($ctx._m0 = {
      "click": api_bind($cmp.navigateToBlog)
    })
  }, [api_static_fragment($fragment1, 2, [api_static_part(1, {
    attrs: {
      "src": $cmp.imageUrl,
      "alt": $cmp.title
    }
  }, null)]), api_element("div", stc2, [api_element("div", stc3, [api_text(api_dynamic_text($cmp.title)), $cmp.isNew ? api_static_fragment($fragment2, 6) : null]), api_static_fragment($fragment3, 8, [api_static_part(1, null, api_dynamic_text($cmp.summary))]), api_element("div", stc4, api_iterator($cmp.formattedCategories, function (category) {
    return api_static_fragment($fragment4, api_key(11, category.id), [api_static_part(0, {
      className: api_normalize_class_name(category.class)
    }, null), api_static_part(1, null, api_dynamic_text(category.name))]);
  }))])])];
  /*LWC compiler v8.14.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-70n0d03vi8b";
tmpl.legacyStylesheetToken = "undefined-blogItem_blogItem";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
