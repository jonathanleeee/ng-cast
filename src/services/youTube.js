angular.module('video-player')
.service('youTube', function($http){
  this.search = function(query, result){
    var self = this;
    $http({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        maxResults: '5',
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        q: query,
        type: 'video'
      }
    }).then(function(response) {
      result(response.data.items);
    });
  };
});
