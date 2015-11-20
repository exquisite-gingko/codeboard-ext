// # Whiteboard Angular Components

// ##### [Back to Table of Contents](./tableofcontents.html)

// Initialize the whiteboard module.

(function() {
  'use strict';

  angular.module('chromeExtension', [])
  .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl() {
    var self = this;

    // This is the board id number entered via user input
    self.boardId;

    // Navigate user to an existing board
    self.loadExisting = function() {
      chrome.windows.create({
        url: 'http://codeboard1-env.elasticbeanstalk.com/' + self.boardId,
        type: 'panel',
      });
    };

    // Navigate user to a new page
    self.loadNew = function() {
      console.log('hello! from load');
      chrome.windows.create({
        url: 'http://codeboard1-env.elasticbeanstalk.com/new',
        type: 'panel',
      });
    };

  }

})();
