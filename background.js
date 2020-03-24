chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(changeInfo.url);
  if (
    changeInfo.url &&
    changeInfo.url.match(
      "(http(s)?://.)?(netflix.com/watch/)([-a-zA-Z0-9@:%_+.~#?&//=]*)"
    )
  ) {
    chrome.tabs.sendMessage(tabId, {
      message: "startedViewing",
      url: changeInfo.url
    });
  }
});
