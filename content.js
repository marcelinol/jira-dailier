// alert(document.getElementById('ghx-header'));

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var header = document.getElementById('ghx-header');
      if(header.style.display === 'none') {
        document.getElementById('ghx-header').style.display = '';
        document.getElementsByClassName('aui-header')[0].style.display = '';
      } else {
        // Remove board header
        document.getElementById('ghx-header').style.display = 'none';
        // Remove navbar
        document.getElementsByClassName('aui-header')[0].style.display = 'none';
      }
    }
  }
);
