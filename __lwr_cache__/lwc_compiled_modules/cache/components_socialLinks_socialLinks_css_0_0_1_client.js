function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".social-links" + shadowSelector + " {margin: 0;padding: 3px;position: absolute;bottom: 0;display: flex;align-items: center;}.social-icon" + shadowSelector + " {font-size: 1.5rem;color: var(--nav-text-color);margin-right: 1rem;transition: color 0.2s ease;display: flex;align-items: center;text-decoration: none;}.social-icon:hover" + shadowSelector + " {color: var(--primary-color);text-decoration: none;}.social-icon" + shadowSelector + " svg" + shadowSelector + " {width: 1.5rem;height: 1.5rem;fill: currentColor;}.social-icon" + shadowSelector + " i" + shadowSelector + ",.social-icon" + shadowSelector + " svg" + shadowSelector + " {display: flex;align-items: center;justify-content: center;}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];