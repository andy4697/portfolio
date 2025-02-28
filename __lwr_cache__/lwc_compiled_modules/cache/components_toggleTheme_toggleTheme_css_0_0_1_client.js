function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".slds-button_icon" + shadowSelector + " {padding: 0.5rem;}.toggle-theme-container" + shadowSelector + " {position: absolute;top: 1rem;right: 1rem;z-index: 10;}.slds-button_icon-inverse" + shadowSelector + " {background-color: transparent;color: #ffffff;}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];