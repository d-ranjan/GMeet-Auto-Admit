function switchExtension(isOn) {
  chrome.storage.sync.set(
    {
      isWorking: isOn,
    },
    function () {
      chrome.browserAction.setIcon({
        path: `Icons/Icon128${isOn ? "" : "_off"}.png`,
      });
      setTimeout(function () {
        window.close();
      }, 500);
    }
  );
}
document.querySelector(".activate").addEventListener("click", function () {
  switchExtension(true);
});
document.querySelector(".deactivate").addEventListener("click", function () {
  switchExtension(false);
});
