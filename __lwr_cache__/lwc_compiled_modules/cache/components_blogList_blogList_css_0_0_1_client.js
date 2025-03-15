function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".blogs-list-container" + shadowSelector + " {display: grid;grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));gap: 1.5rem;width: 100%;}@media (max-width: 640px) {.blogs-list-container" + shadowSelector + " {grid-template-columns: 1fr;}}.view-all-button" + shadowSelector + " {display: inline-block;padding: 0.5rem 1rem;background-color: var(--button-color, #0070d2);color: var(--button-text-color, #fff);border-radius: 0.25rem;text-decoration: none;font-weight: 500;margin-top: 1.5rem;transition: background-color 0.2s ease;}.view-all-button:hover" + shadowSelector + " {background-color: var(--primary-color, #0070d2);filter: brightness(1.1);}.text-center" + shadowSelector + " {text-align: center;}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];