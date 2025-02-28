import _implicitStylesheets from "./toggleTheme.css";
import _implicitScopedStylesheets from "./toggleTheme.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="toggle-theme-container${0}"${2}><button class="slds-button slds-button_icon${0}" title="Toggle Theme"${2}><span class="slds-button__icon slds-button__icon_right${0}"${2}><i${"c3"} aria-hidden="true"${2}></i></span><span class="slds-assistive-text${0}"${2}>Toggle Theme</span></button></div>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, ncls: api_normalize_class_name, sp: api_static_part, st: api_static_fragment} = $api;
  const {_m0} = $ctx;
  return [api_static_fragment($fragment1, 1, [api_static_part(1, {
    on: _m0 || ($ctx._m0 = {
      "click": api_bind($cmp.toggleTheme)
    })
  }, null), api_static_part(3, {
    className: api_normalize_class_name($cmp.iconClass)
  }, null)])];
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
