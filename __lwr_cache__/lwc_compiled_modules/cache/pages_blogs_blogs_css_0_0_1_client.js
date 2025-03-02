function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".blog-data" + shadowSelector + "{max-width: 800px;margin: 0 auto;padding: 2rem;}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];