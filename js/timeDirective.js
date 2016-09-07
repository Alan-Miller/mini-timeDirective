angular.module('timeApp')
.directive('showTime', function() {

  return {
    restrict: 'E',
    template: '<div> The current time is {{time}} </div>',
    link: function(skope, ellimint, attrs) {        // link is where we put all DOM manipulation for JS
      // var currentTime = new Date();
      var currentTime = moment().format('h:mm a on dddd, MMMM Do, YYYY');
      // skope.time = currentTime.getHours().toString() + ':' + currentTime.getMinutes().toString();
      skope.time = currentTime;
    }
  };

});
