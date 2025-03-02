import _implicitStylesheets from "./toggleTheme.css";
import _implicitScopedStylesheets from "./toggleTheme.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span class="material-icons${0}"${2}>light_mode</span>`;
const $fragment2 = parseFragment`<span class="material-icons${0}"${2}>dark_mode</span>`;
const stc0 = {
  classMap: {
    "theme-toggle-container": true
  },
  key: 0
};
const stc1 = {
  "theme-toggle-button": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, st: api_static_fragment, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [api_element("button", {
    classMap: stc1,
    attrs: {
      "title": $cmp.buttonTitle,
      "aria-label": $cmp.buttonTitle
    },
    key: 1,
    on: _m0 || ($ctx._m0 = {
      "click": api_bind($cmp.toggleTheme)
    })
  }, [$cmp.isDarkMode ? api_static_fragment($fragment1, 3) : null, !$cmp.isDarkMode ? api_static_fragment($fragment2, 5) : null])])];
  /*LWC compiler v8.14.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-1ckuock8h08";
tmpl.legacyStylesheetToken = "undefined-toggleTheme_toggleTheme";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
