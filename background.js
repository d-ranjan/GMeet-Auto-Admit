
'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({isWorking: true}, function() {
      console.log('Initializing GMeet Auto Admit...');
      alert('GMeet Auto Admit Initialized');
  });
});
