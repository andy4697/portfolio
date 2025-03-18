import _implicitStylesheets from "./navbar.css";
import _implicitScopedStylesheets from "./navbar.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-nav-vertical__section${0}"${2}><ul class="custom-nav-list${0}"${2}><li class="custom-nav-item${0}"${2}><a href="/home" class="custom-nav-link${0}" data-page="home"${2}><span class="custom-nav-text${0}"${2}>Home</span></a></li><li class="custom-nav-item${0}"${2}><a href="/projects" class="custom-nav-link${0}" data-page="projects"${2}><span class="custom-nav-text${0}"${2}>Projects</span></a></li><li class="custom-nav-item${0}"${2}><a href="/work" class="custom-nav-link${0}" data-page="work"${2}><span class="custom-nav-text${0}"${2}>Work</span></a></li><li class="custom-nav-item${0}"${2}><a href="/blogs" class="custom-nav-link${0}" data-page="blogs"${2}><span class="custom-nav-text${0}"${2}>Blogs</span></a></li><li class="custom-nav-item${0}"${2}><a href="/contact" class="custom-nav-link${0}" data-page="contact"${2}><span class="custom-nav-text${0}"${2}>Contact</span></a></li></ul></div>`;
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
