function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".projects-container" + shadowSelector + " {max-width: 800px;margin: 0 auto;padding: 2rem;color: var(--text-color);transition: color 0.3s ease;}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];