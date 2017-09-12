angular.module('video-player')

.component('app', {
  controller: function() {
    this.selectVideo = function() {

    };
    this.searchResults = function() {

    };
    this.hanldeVideoListEntryClick = (index) => {
      console.log('event handler invoked');
      console.log(index);
      this.currentVideo = exampleVideoData[index];
    },

    this.currentVideo = exampleVideoData[0];
    this.videos = exampleVideoData;

  },
  templateUrl:`src/templates/app.html`
});
