angular.module('sportsStore')
  .controller('ProductListController', function ($scope, $filter) {
    var selectedCategory = null;

    $scope.selectCategory = function selectCategory (newCategory) {
      selectedCategory = newCategory;
    };

    $scope.categoryFilterFn = function categoryFilterFn (product) {
      return selectedCategory == null ||
        product.category == selectedCategory;
    };
  });
