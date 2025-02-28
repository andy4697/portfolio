import _implicitStylesheets from "./services.css";
import _implicitScopedStylesheets from "./services.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div${3}>Hello I am Build And Price Page</div>`;
const $fragment2 = parseFragment`<button class="slds-button slds-button_success${0}"${2}>Success Button</button>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1), api_static_fragment($fragment2, 3)];
  /*LWC compiler v8.14.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-59fkafesun9";
tmpl.legacyStylesheetToken = "pages-services_services";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
