var result = require('./home.json');

function listingCtrl($scope, $http, $routeParams, ListingService) {
  $scope.type = $routeParams.type;
  $scope.entry = result;
  // ListingService.queryByType($scope.type).then(function (response) {
  //   var result = response.data;
  //   $scope.entry = result;
  // }).catch(function (err) {
  //   console.log(err);
  // });
}

module.exports = ['$scope', '$http', '$routeParams', 'SponsoredListingService', listingCtrl];
