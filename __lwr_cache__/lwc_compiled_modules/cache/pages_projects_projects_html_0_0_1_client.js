import _implicitStylesheets from "./projects.css";
import _implicitScopedStylesheets from "./projects.scoped.css?scoped=true";
import _componentsFooter from "components/footer";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<section${3}><h2 class="slds-text-heading_medium slds-m-bottom_medium${0}"${2}>Projects</h2><div class="slds-grid slds-wrap slds-gutters${0}"${2}><div class="slds-col slds-size_1-of-1 slds-medium-size_1-of-2 slds-p-around_small${0}"${2}><div class="slds-box slds-box_x-small project-card${0}"${2}><img src="/public/assets/project.png" alt="Demo Project 1" class="slds-m-bottom_small${0}"${2}><h3 class="slds-text-heading_small${0}"${2}>Demo Project 1<span class="slds-badge slds-theme_success${0}"${2}>NEW</span></h3><p class="slds-text-body_small${0}"${2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><ul class="slds-list_horizontal slds-wrap slds-m-top_small${0}"${2}><li class="slds-list__item${0}"${2}><span class="slds-pill pill-custom${0}"${2}><span class="slds-pill__label${0}" title="HTML"${2}>HTML</span></span></li><li class="slds-list__item${0}"${2}><span class="slds-pill pill-custom${0}"${2}><span class="slds-pill__label${0}" title="CSS"${2}>CSS</span></span></li><li class="slds-list__item${0}"${2}><span class="slds-pill pill-custom${0}"${2}><span class="slds-pill__label${0}" title="JavaScript"${2}>JavaScript</span></span></li></ul></div></div><div class="slds-col slds-size_1-of-1 slds-medium-size_1-of-2 slds-p-around_small${0}"${2}><div class="slds-box slds-box_x-small project-card${0}"${2}><img src="/public/assets/project.png" alt="Demo Project 2" class="slds-m-bottom_small${0}"${2}><h3 class="slds-text-heading_small${0}"${2}>Demo Project 2</h3><p class="slds-text-body_small${0}"${2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><ul class="slds-list_horizontal slds-wrap slds-m-top_small${0}"${2}><li class="slds-list__item${0}"${2}><span class="slds-pill pill-custom${0}"${2}><span class="slds-pill__label${0}" title="Apex"${2}>Apex</span></span></li><li class="slds-list__item${0}"${2}><span class="slds-pill pill-custom${0}"${2}><span class="slds-pill__label${0}" title="LWC"${2}>LWC</span></span></li><li class="slds-list__item${0}"${2}><span class="slds-pill pill-custom${0}"${2}><span class="slds-pill__label${0}" title="Salesforce"${2}>Salesforce</span></span></li></ul></div></div><div class="slds-col slds-size_1-of-1 slds-medium-size_1-of-2 slds-p-around_small${0}"${2}><div class="slds-box slds-box_x-small project-card${0}"${2}><img src="/public/assets/project.png" alt="Demo Project 2" class="slds-m-bottom_small${0}"${2}><h3 class="slds-text-heading_small${0}"${2}>Demo Project 2</h3><p class="slds-text-body_small${0}"${2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><ul class="slds-list_horizontal slds-wrap slds-m-top_small${0}"${2}><li class="slds-list__item${0}"${2}><span class="slds-pill pill-custom${0}"${2}><span class="slds-pill__label${0}" title="Apex"${2}>Apex</span></span></li><li class="slds-list__item${0}"${2}><span class="slds-pill pill-custom${0}"${2}><span class="slds-pill__label${0}" title="LWC"${2}>LWC</span></span></li><li class="slds-list__item${0}"${2}><span class="slds-pill pill-custom${0}"${2}><span class="slds-pill__label${0}" title="Salesforce"${2}>Salesforce</span></span></li></ul></div></div><div class="slds-col slds-size_1-of-1 slds-medium-size_1-of-2 slds-p-around_small${0}"${2}><div class="slds-box slds-box_x-small project-card${0}"${2}><img src="/public/assets/project.png" alt="Demo Project 2" class="slds-m-bottom_small${0}"${2}><h3 class="slds-text-heading_small${0}"${2}>Demo Project 2</h3><p class="slds-text-body_small${0}"${2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><ul class="slds-list_horizontal slds-wrap slds-m-top_small${0}"${2}><li class="slds-list__item${0}"${2}><span class="slds-pill pill-custom${0}"${2}><span class="slds-pill__label${0}" title="Apex"${2}>Apex</span></span></li><li class="slds-list__item${0}"${2}><span class="slds-pill pill-custom${0}"${2}><span class="slds-pill__label${0}" title="LWC"${2}>LWC</span></span></li><li class="slds-list__item${0}"${2}><span class="slds-pill pill-custom${0}"${2}><span class="slds-pill__label${0}" title="Salesforce"${2}>Salesforce</span></span></li></ul></div></div></div></section>`;
const stc0 = {
  classMap: {
    "slds-p-around_medium": true
  },
  key: 0
};
const stc1 = {
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, c: api_custom_element, h: api_element} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2), api_custom_element("components-footer", _componentsFooter, stc1)])];
  /*LWC compiler v8.14.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-dt95vd4hmn";
tmpl.legacyStylesheetToken = "undefined-projects_projects";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
