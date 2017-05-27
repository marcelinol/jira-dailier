// alert(document.getElementById('ghx-header'));

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      // Remove board header
      document.getElementById('ghx-header').style.display = 'none';

      // Remove navbar
      document.getElementsByClassName('aui-header')[0].style.display = 'none';

    }
  }
);
