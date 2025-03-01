import _implicitStylesheets from "./blogItem.css";
import _implicitScopedStylesheets from "./blogItem.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-media__figure slds-m-right_medium${0}"${2}><img${"a1:src"} alt="Blog Image" style="width: 80px; height: auto;"${3}></div>`;
const $fragment2 = parseFragment`<h2 class="slds-text-heading_medium slds-m-right_small${0}"${2}>${"t1"}</h2>`;
const $fragment3 = parseFragment`<span class="slds-badge slds-theme_success${0}"${2}>New</span>`;
const $fragment4 = parseFragment`<p class="slds-m-bottom_small${0}"${2}>${"t1"}</p>`;
const $fragment5 = parseFragment`<span class="slds-badge slds-m-right_x-small slds-m-bottom_x-small${0}"${"s0"}${2}>${"t1"}</span>`;
const $fragment6 = parseFragment`<hr${3}>`;
const stc0 = {
  classMap: {
    "blog-item-container": true,
    "slds-media": true,
    "slds-media_center": true,
    "slds-p-around_medium": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-media__body": true
  },
  key: 3
};
const stc2 = {
  classMap: {
    "slds-grid": true,
    "slds-m-bottom_x-small": true
  },
  key: 4
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {sp: api_static_part, st: api_static_fragment, d: api_dynamic_text, h: api_element, k: api_key, i: api_iterator, f: api_flatten} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2, [api_static_part(1, {
    attrs: {
      "src": $cmp.imageUrl
    }
  }, null)]), api_element("div", stc1, api_flatten([api_element("div", stc2, [api_static_fragment($fragment2, 6, [api_static_part(1, null, api_dynamic_text($cmp.title))]), $cmp.isNew ? api_static_fragment($fragment3, 8) : null]), api_static_fragment($fragment4, 10, [api_static_part(1, null, api_dynamic_text($cmp.summary))]), api_iterator($cmp.categories, function (category) {
    return api_static_fragment($fragment5, api_key(12, category), [api_static_part(0, {
      style: $cmp.pillStyle
    }, null), api_static_part(1, null, api_dynamic_text(category))]);
  })]))]), api_static_fragment($fragment6, 14)];
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
