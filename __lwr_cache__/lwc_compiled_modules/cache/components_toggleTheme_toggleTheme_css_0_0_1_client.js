function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".theme-toggle-container" + shadowSelector + " {display: flex;justify-content: flex-end;padding: 0.5rem 1rem;}.theme-toggle-button" + shadowSelector + " {width: 2.5rem;height: 2.5rem;border-radius: 50%;background: transparent;border: none;cursor: pointer;display: flex;align-items: center;justify-content: center;transition: background-color 0.3s ease;}.theme-toggle-button:hover" + shadowSelector + " {background-color: var(--toggle-hover-color, rgba(0, 0, 0, 0.1));}.material-icons" + shadowSelector + " {font-size: 1.5rem;color: var(--toggle-icon-color, #706e6b);}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];