function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".blog-item-container" + shadowSelector + " {width: 100%;background-color: #fff;margin-bottom: 1rem;border-radius: 4px;transition: box-shadow 0.2s ease-in-out;}.blog-item-container:hover" + shadowSelector + " {box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];