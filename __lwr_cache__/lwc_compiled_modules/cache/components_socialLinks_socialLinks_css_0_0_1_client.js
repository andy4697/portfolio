function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".social-links" + shadowSelector + " {margin: 0;padding: 3px;position: absolute;bottom :0}.social-icon" + shadowSelector + " {font-size: 1.5rem;color: #16325c;margin-right: 1rem;transition: color 0.2s ease;}.social-icon:hover" + shadowSelector + " {color: #0070d2;}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];