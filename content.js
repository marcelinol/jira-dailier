chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var header = document.getElementById('ghx-header');
      var navbar = document.getElementsByClassName('aui-header')[0];

      toggleVisibility(header);
      toggleVisibility(navbar);
    }
  }
);

var toggleVisibility = function(element) {
  if(element.style.display === 'none') {
    element.style.display = '';
  } else {
    element.style.display = 'none';
  }
}
