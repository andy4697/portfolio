function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".navigation-menu" + shadowSelector + " {padding: 0;}.nav-item" + shadowSelector + " {color: #05162f;text-decoration: none;font-size: 1rem;transition: background-color 0.3s ease;display: block;}.nav-item:hover" + shadowSelector + " {background-color: #eef1f6;}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];