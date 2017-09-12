angular.module('video-player')

.component('app', {
  controller: function() {
    this.selectVideo = function() {

    };
    this.searchResults = function() {

    };
    this.hanldeVideoListEntryClick = function(index) {
      console.log('event handler invoked');
    },

    this.currentVideo = exampleVideoData[0];
    this.videos = exampleVideoData;

  },
  templateUrl:`src/templates/app.html`
});
