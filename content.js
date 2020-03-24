chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "startedViewing") {
    console.log(request.url);
  }
});
