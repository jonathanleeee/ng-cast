angular.module('video-player')

.component('search', {
  templateUrl:`src/templates/search.html`,
  controller: function() {
    this.result = function(){

    };
    this.search = function(){
      console.log('clicked');
    };
  }

});
