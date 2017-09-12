angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    hanldeVideoListEntryClick: '<'
  },
  templateUrl:`src/templates/videoList.html`,
  controller: function() {

  }
});
