chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      toggleVisibility(document.getElementById('ghx-header'));
      toggleVisibility(document.getElementsByClassName('aui-header')[0]);

      adjustHeightForWindow(document.getElementById('ghx-work'));
      adjustHeightForWindow(document.getElementById('ghx-plan'));
      adjustHeightForWindow(document.getElementById('ghx-plan-group'));
    }
  }
);

var toggleVisibility = function(element) {
  if(element.style.display === 'none') {
    element.style.display = '';
  } else {
    element.style.display = 'none';
  }
};

var adjustHeightForWindow = function(element) {
  if (element !== undefined && element !== null) {
    element.style.height = window.innerHeight + "px";
  }
}

