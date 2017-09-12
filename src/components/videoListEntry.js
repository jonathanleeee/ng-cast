angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    cb: '<'
  },
  templateUrl:`src/templates/videoListEntry.html`,
  controller: function(){
    console.log(this);
    this.handleClick = () => {
      console.log('clicked');
      console.log(this.handleVideoListEntryClick());
    };

  }
});
