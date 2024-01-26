// Example: https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js
browser.browserAction.onClicked.addListener((tab) => {
  try {
    if (tab.url?.startsWith("about:")) return undefined;
    browser.tabs.executeScript({ file: "action.js" })
  } catch (e) {
    console.log(e);
  }
});