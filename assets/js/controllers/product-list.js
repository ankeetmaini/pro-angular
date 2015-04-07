angular.module('sportsStore')
  .constant("productListActiveClass", "btn-primary")
  .controller('ProductListController', function ($scope, $filter, productListActiveClass) {
    var selectedCategory = null;

    $scope.selectCategory = function selectCategory (newCategory) {
      selectedCategory = newCategory;
    };

    $scope.categoryFilterFn = function categoryFilterFn (product) {
      return selectedCategory == null ||
        product.category == selectedCategory;
    };

    $scope.getCategoryClass = function getCategoryClass (category) {
      console.log('Category class called..');
      return selectedCategory == category ? productListActiveClass : "";
    };
  });
