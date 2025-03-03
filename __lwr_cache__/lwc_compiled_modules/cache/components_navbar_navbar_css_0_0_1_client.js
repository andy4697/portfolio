function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".navigation-menu" + shadowSelector + " {padding: 0;}.nav-item" + shadowSelector + " {color: var(--text-color);text-decoration: none;font-size: 1rem;transition: background-color 0.3s ease, color 0.3s ease;display: block;padding: 0.75rem 1rem;border-radius: var(--radius);}.nav-item:hover" + shadowSelector + " {background-color: var(--secondary);color: var(--secondary-foreground);}.nav-item.slds-is-active" + shadowSelector + " {background-color: var(--accent);color: var(--accent-foreground);font-weight: 500;}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];