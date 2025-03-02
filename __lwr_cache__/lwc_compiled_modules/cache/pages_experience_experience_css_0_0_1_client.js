function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".experience-container" + shadowSelector + " {max-width: 800px;background-color: #fff;padding: 2rem;border-radius: 4px;}.timeline-item" + shadowSelector + " {position: relative;padding-left: 3rem;}.timeline-item" + shadowSelector + ":before {content: '';position: absolute;left: 7px;top: 6px;height: 100%;width: 2px;background-color: #0070d2;}.timeline-item:not(:last-child)" + shadowSelector + ":before {height: calc(100% + 6px);}.timeline-item:last-child" + shadowSelector + ":before {height: 0;}.timeline-marker" + shadowSelector + " {position: absolute;left: 0;top: 6px;width: 16px;height: 16px;background-color: #0070d2;border-radius: 50%;z-index: 1;}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];