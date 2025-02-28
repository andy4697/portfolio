function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".sidebar-container" + shadowSelector + " {position: fixed;left: 0;top: 0;bottom: 0;height: 100vh;display: flex;flex-direction: column;overflow-y: auto;box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);}.slds-context-bar" + shadowSelector + " {background-color: #ffffff;border: none;}.social-links-wrapper" + shadowSelector + " {margin-top: auto;border-top: none;padding: 0.5rem 0;}.profile-section" + shadowSelector + "{margin: 0 auto;transform: translateX(-10px);}.profile-image-container" + shadowSelector + " {width: 180px;height: 180px;border-radius: 80%;overflow: hidden;background-color: #e8e8e8;display: flex;justify-content: center;align-items: center;margin: 0 auto;}.profile-image" + shadowSelector + " {width: 100%;height: 100%;object-fit: cover;}";
  /*LWC compiler v8.14.0*/
}
export default [stylesheet];