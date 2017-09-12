angular.module('video-player')

.component('search', {
  templateUrl:`src/templates/search.html`,
  controller: function($http) {
    this.result = function(){

    };
    this.search = function(){
      var self = this;
      $http({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
          maxResults: '5',
          key: YOUTUBE_API_KEY,
          part: 'snippet',
          q: self.query,
          type: 'video'
        }
      }).then(function(response) {
        console.log(response);
      });
      console.log(this.query);
    };
  }

});
