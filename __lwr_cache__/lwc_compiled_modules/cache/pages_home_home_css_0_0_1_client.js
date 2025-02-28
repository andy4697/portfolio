function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".slds-box" + shadowSelector + " img" + shadowSelector + " {max-width: 100%;height: auto;}.slds-box" + shadowSelector + " {border: none;}.project-card" + shadowSelector + ",.blog-card" + shadowSelector + " {border: 1px solid #d8dde6;border-radius: 0.5rem;background-color: #ffffff;padding: 1rem;transition: box-shadow 0.3s ease-in-out;}.project-card:hover" + shadowSelector + ",.blog-card:hover" + shadowSelector + " {box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);}.pill-custom" + shadowSelector + " {background-color: #ffffff;border-radius: 15px;padding: 0.25rem 0.75rem;margin-right: 0.5rem;margin-bottom: 0.5rem;display: inline-block;font-size: 0.75rem;font-weight: 500;color: purple;cursor: default;}.pill-custom:hover" + shadowSelector + " {background-color: #E3E5EA;}.slds-badge" + shadowSelector + " {margin-left: 5px;}.slds-button" + shadowSelector + " {margin-right: 10px;}@media (max-width: 768px) {.slds-grid" + shadowSelector + " {flex-direction: column;}.slds-media__figure" + shadowSelector + " {margin-bottom: 1rem;}}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];