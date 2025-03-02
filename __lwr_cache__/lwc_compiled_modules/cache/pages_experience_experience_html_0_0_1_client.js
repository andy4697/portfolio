import _implicitStylesheets from "./experience.css";
import _implicitScopedStylesheets from "./experience.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-text-heading_large slds-m-bottom_large${0}"${2}>Experience</div>`;
const $fragment2 = parseFragment`<div class="timeline-item slds-p-bottom_medium${0}"${2}><div class="timeline-marker${0}"${2}></div><div class="slds-m-bottom_medium${0}"${2}><div class="slds-text-heading_medium slds-text-color_default slds-m-bottom_x-small${0}"${2}>${"t4"}</div><div class="slds-text-body_small slds-text-color_weak slds-m-bottom_small${0}"${2}>${"t6"}</div><div class="slds-text-body_regular${0}"${2}>${"t8"}</div></div></div>`;
const stc0 = {
  classMap: {
    "slds-scope": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "experience-container": true,
    "slds-p-around_large": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "timeline": true
  },
  key: 4
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, k: api_key, d: api_dynamic_text, sp: api_static_part, i: api_iterator, h: api_element} = $api;
  return [api_element("div", stc0, [api_element("div", stc1, [api_static_fragment($fragment1, 3), api_element("div", stc2, api_iterator($cmp.experiences, function (job, index) {
    return api_static_fragment($fragment2, api_key(6, job.id), [api_static_part(4, null, api_dynamic_text(job.title)), api_static_part(6, null, "From " + api_dynamic_text(job.startDate) + " to " + api_dynamic_text(job.endDate) + " at " + api_dynamic_text(job.company) + ", " + api_dynamic_text(job.location)), api_static_part(8, null, api_dynamic_text(job.description))]);
  }))])])];
  /*LWC compiler v8.14.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-15ko655sg4k";
tmpl.legacyStylesheetToken = "undefined-experience_experience";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
