angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    cb: '<'
  },
  templateUrl:`src/templates/videoList.html`,
  controller: function() {
    console.log(this);
    this.onClick = () => {

    };
  }
});
