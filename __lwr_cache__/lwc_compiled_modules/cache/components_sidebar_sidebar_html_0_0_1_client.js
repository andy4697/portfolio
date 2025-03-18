import _implicitStylesheets from "./sidebar.css";
import _implicitScopedStylesheets from "./sidebar.scoped.css?scoped=true";
import _componentsToggleTheme from "components/toggleTheme";
import _componentsNavbar from "components/navbar";
import _componentsSocialLinks from "components/socialLinks";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<button class="menu-toggle${0}" aria-label="Toggle menu"${2}><i class="fas fa-bars${0}"${2}></i></button>`;
const $fragment2 = parseFragment`<h1 class="site-title${0}"${2}>Anudeep Appikatla</h1>`;
const $fragment3 = parseFragment`<div class="profile-section${0}"${2}><div class="profile-image-container${0}"${2}><img src="/public/assets/profile.jpg" alt="Profile" class="profile-image${0}"${2}></div></div>`;
const $fragment4 = parseFragment`<div class="profile-section${0}"${2}><div class="profile-image-container${0}"${2}><img src="/public/assets/profile.jpg" alt="Profile" class="profile-image${0}"${2}></div></div>`;
const stc0 = {
  classMap: {
    "mobile-header": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "mobile-theme-toggle": true
  },
  key: 5
};
const stc2 = {
  "sidebar-content": true,
  "mobile-sidebar": true
};
const stc3 = {
  classMap: {
    "navigation-area": true,
    "exclude-from-close": true
  },
  key: 11
};
const stc4 = {
  key: 12
};
const stc5 = {
  classMap: {
    "social-links-wrapper": true,
    "exclude-from-close": true
  },
  key: 13
};
const stc6 = {
  key: 14
};
const stc7 = {
  classMap: {
    "desktop-sidebar": true
  },
  key: 15
};
const stc8 = {
  classMap: {
    "navigation-area": true
  },
  key: 18
};
const stc9 = {
  key: 19
};
const stc10 = {
  classMap: {
    "social-links-wrapper": true
  },
  key: 20
};
const stc11 = {
  key: 21
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, sp: api_static_part, st: api_static_fragment, c: api_custom_element, h: api_element, ncls: api_normalize_class_name} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6} = $ctx;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2, [api_static_part(0, {
    on: _m1 || ($ctx._m1 = {
      "click": api_bind($cmp.toggleMenu)
    })
  }, null)]), api_static_fragment($fragment2, 4), api_element("div", stc1, [api_custom_element("components-toggle-theme", _componentsToggleTheme, {
    key: 6,
    on: _m2 || ($ctx._m2 = {
      "themechange": api_bind($cmp.handleThemeChange)
    })
  })])]), api_element("div", {
    className: api_normalize_class_name($cmp.mobileMenuClass),
    key: 7,
    on: _m3 || ($ctx._m3 = {
      "click": api_bind($cmp.handleBackdropClick)
    })
  }, [api_element("div", {
    classMap: stc2,
    key: 8,
    on: _m4 || ($ctx._m4 = {
      "click": api_bind($cmp.stopPropagation)
    })
  }, [api_static_fragment($fragment3, 10, [api_static_part(0, {
    on: _m6 || ($ctx._m6 = {
      "click": api_bind($cmp.closeMenuIfNotExcluded)
    })
  }, null)]), api_element("div", stc3, [api_custom_element("components-navbar", _componentsNavbar, stc4)]), api_element("div", stc5, [api_custom_element("components-social-links", _componentsSocialLinks, stc6)])])]), api_element("div", stc7, [api_static_fragment($fragment4, 17), api_element("div", stc8, [api_custom_element("components-navbar", _componentsNavbar, stc9)]), api_element("div", stc10, [api_custom_element("components-social-links", _componentsSocialLinks, stc11)])])];
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
