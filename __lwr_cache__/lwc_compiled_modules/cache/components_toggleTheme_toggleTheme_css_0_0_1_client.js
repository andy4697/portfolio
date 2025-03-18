function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".theme-toggle-container" + shadowSelector + " {position: fixed;top: 15px;right: 15px;z-index: var(--z-index-theme-toggle);padding: 0;}.theme-toggle-button" + shadowSelector + " {width: 2.5rem;height: 2.5rem;border-radius: 50%;background: transparent;border: none;cursor: pointer;display: flex;align-items: center;justify-content: center;transition: background-color 0.3s ease;}.theme-toggle-button:hover" + shadowSelector + " {background-color: var(--toggle-hover-color);}.material-icons" + shadowSelector + " {font-size: 1.5rem;color: var(--toggle-icon-color);transition: color 0.3s ease;}@media (max-width: 768px) {.theme-toggle-container" + shadowSelector + " {top: 10px;right: 10px;}.theme-toggle-button" + shadowSelector + " {width: 2rem;height: 2rem;}.material-icons" + shadowSelector + " {font-size: 1.2rem;}}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];