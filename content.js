// In case user directly goes to "netflix.com/watch"
hoverOver();

// In case user goes from "netflix.com/browse" to "netflix.com/watch"
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "startedViewing") {
    hoverOver();
  }
});

function hoverOver() {
  console.log("Yoohoo");
}