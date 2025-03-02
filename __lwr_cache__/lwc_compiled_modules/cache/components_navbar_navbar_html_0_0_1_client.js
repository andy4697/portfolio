import _implicitStylesheets from "./navbar.css";
import _implicitScopedStylesheets from "./navbar.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<nav class="slds-nav-vertical slds-p-around_none navigation-menu${0}"${2}><a href="/home" class="slds-nav-vertical__item nav-item${0}"${2}><span class="slds-nav-vertical__action slds-truncate${0}"${2}>Home</span></a><a href="/projects" class="slds-nav-vertical__item nav-item${0}"${2}><span class="slds-nav-vertical__action slds-truncate${0}"${2}>Projects</span></a><a href="/work" class="slds-nav-vertical__item nav-item${0}"${2}><span class="slds-nav-vertical__action slds-truncate${0}"${2}>Work</span></a><a href="/blogs" class="slds-nav-vertical__item nav-item${0}"${2}><span class="slds-nav-vertical__action slds-truncate${0}"${2}>Blogs</span></a><a href="/contact" class="slds-nav-vertical__item nav-item${0}"${2}><span class="slds-nav-vertical__action slds-truncate${0}"${2}>Contact</span></a></nav>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1)];
  /*LWC compiler v8.14.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-3htsh0d98um";
tmpl.legacyStylesheetToken = "undefined-navbar_navbar";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
