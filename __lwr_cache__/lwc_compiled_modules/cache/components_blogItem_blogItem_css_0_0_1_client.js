function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".blog-item-container" + shadowSelector + " {width: 100%;background-color: var(--card);margin-bottom: 1rem;border-radius: var(--radius);transition: box-shadow 0.2s ease-in-out, background-color 0.3s ease;padding: 1.5rem;color: var(--card-foreground);}.blog-item-container:hover" + shadowSelector + " {box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);}[data-theme=\"dark\"]" + shadowSelector + " .blog-item-container:hover" + shadowSelector + " {box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];