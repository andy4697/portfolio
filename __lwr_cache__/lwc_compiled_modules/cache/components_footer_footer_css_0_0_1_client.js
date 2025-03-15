function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "footer" + shadowSelector + " {background-color: var(--background-color);color: var(--text-color);padding: 1rem;text-align: center;width: 100%;font-size: 0.875rem;}" + ((useActualHostSelector ? ":host {" : hostSelector + " {")) + "display: block;}@media (max-width: 768px) {footer" + shadowSelector + " {margin-left: 0;}}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];