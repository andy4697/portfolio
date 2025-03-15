import _implicitStylesheets from "./home.css";
import _implicitScopedStylesheets from "./home.scoped.css?scoped=true";
import _componentsProjectList from "components/projectList";
import _componentsBlogList from "components/blogList";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<section class="intro-section${0}"${2}><h1 class="slds-text-heading_large${0}"${2}>Hey there 👋</h1><h2 class="slds-text-heading_medium${0}"${2}>I&#x27;m Anudeep Appikatla</h2><h3 class="slds-text-heading_small${0}"${2}>5x Salesforce Certified</h3><p class="intro-text${0}"${2}>A passionate Salesforce Developer with 5x certifications who loves creating innovative solutions and learning new technologies.</p><div class="slds-m-top_large${0}"${2}><a href="/contact" class="slds-button slds-button_neutral slds-button_compact${0}"${2}>Let&#x27;s talk</a></div></section>`;
const $fragment2 = parseFragment`<div class="section-header${0}"${2}><h2 class="slds-text-heading_medium${0}"${2}>Latest projects</h2><a href="/projects" class="view-all-link${0}"${2}>View all projects →</a></div>`;
const $fragment3 = parseFragment`<div class="section-header${0}"${2}><h2 class="slds-text-heading_medium${0}"${2}>Latest Blogs</h2><a href="/blogs" class="view-all-link${0}"${2}>View all blogs →</a></div>`;
const stc0 = {
  classMap: {
    "home-container": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "section-container": true
  },
  key: 3
};
const stc2 = {
  props: {
    "isHomePage": "true"
  },
  key: 6
};
const stc3 = {
  classMap: {
    "section-container": true
  },
  key: 7
};
const stc4 = {
  props: {
    "isHomePage": "true"
  },
  key: 10
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, c: api_custom_element, h: api_element} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2), api_element("section", stc1, [api_static_fragment($fragment2, 5), api_custom_element("components-project-list", _componentsProjectList, stc2)]), api_element("section", stc3, [api_static_fragment($fragment3, 9), api_custom_element("components-blog-list", _componentsBlogList, stc4)])])];
  /*LWC compiler v8.14.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-4a35ra6tlml";
tmpl.legacyStylesheetToken = "undefined-home_home";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
