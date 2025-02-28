import _implicitStylesheets from "./socialLinks.css";
import _implicitScopedStylesheets from "./socialLinks.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-col social-links slds-grid slds-grid_align-center slds-gutters${0}"${2}><a href="https://github.com/yourusername" class="social-icon${0}" target="_blank" aria-label="GitHub"${2}><i class="fab fa-github slds-icon slds-icon-text-default${0}"${2}></i></a><a href="https://medium.com/@yourusername" class="social-icon${0}" target="_blank" aria-label="Medium"${2}><i class="fab fa-medium slds-icon slds-icon-text-default${0}"${2}></i></a><a href="https://www.linkedin.com/in/yourusername" class="social-icon${0}" target="_blank" aria-label="LinkedIn"${2}><i class="fab fa-linkedin slds-icon slds-icon-text-default${0}"${2}></i></a><a href="https://www.buymeacoffee.com/yourusername" class="social-icon${0}" target="_blank" aria-label="Buy Me a Coffee"${2}><i class="fas fa-coffee slds-icon slds-icon-text-default${0}"${2}></i></a></div>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1)];
  /*LWC compiler v8.14.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-7f68vn7lu6q";
tmpl.legacyStylesheetToken = "undefined-socialLinks_socialLinks";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
