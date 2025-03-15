function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".blogs-container" + shadowSelector + " {max-width: 800px;margin: 0 auto;padding: 2rem;color: var(--text-color);}.blogs-title" + shadowSelector + " {color: var(--text-color);margin-bottom: 2rem;}@media (max-width: 768px) {.blogs-container" + shadowSelector + " {padding: 1rem;}}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];