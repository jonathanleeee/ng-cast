angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    this.selectVideo = function() {
    };
    this.searchResults = function() {
    };
    this.hanldeVideoListEntryClick = (index) => {
      this.currentVideo = this.videos[index];
    },
    this.handleSearch = (response) => {
      this.videos = response;
      this.currentVideo = this.videos[0];
    };
    this.$onInit = function() {
      youTube.search('', this.handleSearch);
    };
  },
  templateUrl:`src/templates/app.html`
});
