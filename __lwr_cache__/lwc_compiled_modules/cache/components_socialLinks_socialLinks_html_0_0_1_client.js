import _implicitStylesheets from "./socialLinks.css";
import _implicitScopedStylesheets from "./socialLinks.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<div class="slds-col social-links slds-grid slds-grid_align-center slds-gutters${0}"${2}><a href="https://github.com/andy4697" class="social-icon${0}" target="_blank" aria-label="GitHub"${2}><i class="fab fa-github slds-icon slds-icon-text-default${0}"${2}></i></a><a href="https://www.linkedin.com/in/anudeep-appikatla" class="social-icon${0}" target="_blank" aria-label="LinkedIn"${2}><i class="fab fa-linkedin slds-icon slds-icon-text-default${0}"${2}></i></a><a href="https://twitter.com/aanudeep4697" class="social-icon${0}" target="_blank" aria-label="Twitter"${2}><i class="fab fa-x-twitter slds-icon slds-icon-text-default${0}"${2}></i></a><a href="https://trailblazer.me/id/aappikatla" class="social-icon${0}" target="_blank" aria-label="Trailhead Profile"${2}><svg class="slds-icon slds-icon-text-default${0}" aria-hidden="true"${2}><use${"a9:xlink:href"}${3}/></svg></a></div>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {sp: api_static_part, st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1, [api_static_part(9, {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/public/assets/icons/utility-sprite/svg/symbols.svg#trailhead")
    }
  }, null)])];
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
