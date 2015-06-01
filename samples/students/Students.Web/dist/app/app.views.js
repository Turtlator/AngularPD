(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('home.html',
    '<div>\n' +
    '    Home\n' +
    '</div>');
}]);
})();
