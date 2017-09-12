angular.module('video-player')
.component('search', {
  bindings: {
    result: '<'
  },
  templateUrl:`src/templates/search.html`,
  controller: function(youTube) {
    this.search = function(){
      youTube.search(this.query, this.result);
    };
  }

});
