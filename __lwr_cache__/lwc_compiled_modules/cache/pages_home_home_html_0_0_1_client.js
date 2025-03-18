import _implicitStylesheets from "./home.css";
import _implicitScopedStylesheets from "./home.scoped.css?scoped=true";
import _componentsProjectList from "components/projectList";
import _componentsBlogList from "components/blogList";
import {freezeTemplate, parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<section class="intro-section${0}"${2}><h1 class="slds-text-heading_large slds-m-bottom_medium${0}"${2}>Hey there 👋</h1><div class="slds-text-body_regular slds-m-bottom_large content-paragraphs${0}"${2}><p class="slds-m-bottom_medium${0}"${2}>I&#x27;m Anudeep Appikatla—a seasoned Salesforce developer and data enthusiast with over five years of experience designing, building, and optimizing Salesforce solutions for global businesses. With certifications as a Salesforce AI Specialist, Platform Developer, and Administrator, I&#x27;ve led initiatives ranging from custom asset management systems and ERP integrations to extensive data migrations impacting millions of users.</p><p class="slds-m-bottom_medium${0}"${2}>Throughout my career, I&#x27;ve streamlined procurement workflows, automated complex business processes, and developed interactive dashboards that translate data into strategic insights. I thrive at the intersection of technology and business, consistently delivering solutions that enhance efficiency, accuracy, and user adoption.</p><p class="slds-m-bottom_medium${0}"${2}>Currently, I&#x27;m expanding my technical expertise through a Master&#x27;s in Information Science at the University of Arizona, specializing in Machine Learning, Neural Networks, and Data Visualization. My recent work includes applied Natural Language Processing and deep learning projects that focus on bias mitigation, NLP applications like offensive language detection, and leveraging models such as RoBERTa for commonsense validation.</p><p class="slds-m-bottom_medium${0}"${2}>I&#x27;m passionate about exploring how emerging technologies like AI and NLP can drive smarter decisions and better user experiences. If you&#x27;re interested in collaborating or discussing innovative solutions, I&#x27;d love to connect!</p><p class="slds-m-bottom_medium hire-section${0}"${2}><strong class="highlighted-text${0}"${2}>Available for Hire</strong><span class="separator${0}"${2}>—</span><a href="/contact" class="slds-button slds-button_brand lets-talk-button${0}"${2}>Let&#x27;s talk! <span class="button-icon${0}"${2}>→</span></a></p></div><div class="trailhead-section slds-m-top_x-large${0}"${2}><h2 class="slds-text-heading_medium slds-m-bottom_medium${0}"${2}><span class="slds-icon_container${0}"${2}><svg class="slds-icon slds-m-right_x-small${0}" aria-hidden="true"${2}><use${"a25:xlink:href"}${3}/></svg></span>Trailhead Profile</h2><div class="slds-grid slds-grid_align-center slds-wrap achievement-pills${0}"${2}><div class="slds-pill achievement-pill certified${0}"${2}><span class="slds-pill__label${0}"${2}><span class="achievement-icon${0}"${2}>📜</span><span class="achievement-count${0}"${2}>5x</span>Salesforce Certified</span></div><div class="slds-pill slds-m-right_x-small achievement-pill points${0}"${2}><span class="slds-pill__label${0}"${2}><span class="achievement-icon${0}"${2}>⭐</span><span class="achievement-count${0}"${2}>99,525</span>Points</span></div><div class="slds-pill slds-m-right_x-small achievement-pill badges${0}"${2}><span class="slds-pill__label${0}"${2}><span class="achievement-icon${0}"${2}>🎯</span><span class="achievement-count${0}"${2}>43</span>Badges</span></div><div class="slds-pill slds-m-right_x-small achievement-pill superbadge${0}"${2}><span class="slds-pill__label${0}"${2}><span class="achievement-icon${0}"${2}>🏆</span><span class="achievement-count${0}"${2}>7</span>Superbadges</span></div><div class="slds-pill achievement-pill mountaineer${0}"${2}><span class="slds-pill__label${0}"${2}><img src="/public/assets/mountaineer.png" alt="Mountaineer" class="achievement-icon mountaineer-icon${0}"${2}>Mountaineer</span></div></div></div></section>`;
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
  const {sp: api_static_part, st: api_static_fragment, c: api_custom_element, h: api_element} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2, [api_static_part(25, {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/public/assets/icons/utility-sprite/svg/symbols.svg#trailhead")
    }
  }, null)]), api_element("section", stc1, [api_static_fragment($fragment2, 5), api_custom_element("components-project-list", _componentsProjectList, stc2)]), api_element("section", stc3, [api_static_fragment($fragment3, 9), api_custom_element("components-blog-list", _componentsBlogList, stc4)])])];
  /*LWC compiler v8.14.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-6le4c39rot8";
tmpl.legacyStylesheetToken = "pages-home_home";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
