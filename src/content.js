var body = document.getElementsByTagName('body')[0];
var s = document.createElement('script');
s.src = chrome.extension.getURL("src/inject.js");
body.appendChild(s);
