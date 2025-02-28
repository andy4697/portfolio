import _implicitStylesheets from "./sidebar.css";
import _implicitScopedStylesheets from "./sidebar.scoped.css?scoped=true";
import _componentsNavbar from "components/navbar";
import _componentsSocialLinks from "components/socialLinks";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-col slds-p-around_medium profile-section${0}"${2}><div class="profile-image-container${0}"${2}><img src="/public/assets/profile.jpg" alt="Profile" class="profile-image${0}"${2}></div></div>`;
const stc0 = {
  classMap: {
    "slds-context-bar": true,
    "slds-grid": true,
    "slds-grid_vertical": true,
    "sidebar-container": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-col": true,
    "navigation-area": true
  },
  key: 3
};
const stc2 = {
  key: 4
};
const stc3 = {
  classMap: {
    "slds-col": true,
    "social-links-wrapper": true
  },
  key: 5
};
const stc4 = {
  key: 6
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, c: api_custom_element, h: api_element} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2), api_element("div", stc1, [api_custom_element("components-navbar", _componentsNavbar, stc2)]), api_element("div", stc3, [api_custom_element("components-social-links", _componentsSocialLinks, stc4)])])];
  /*LWC compiler v8.14.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-4cgf41s8lid";
tmpl.legacyStylesheetToken = "undefined-sidebar_sidebar";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
