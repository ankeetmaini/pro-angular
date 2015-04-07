angular.module('sportsStore')
  .constant('productListActiveClass', 'btn-primary')
  .constant('productListPageCount', 3)
  .controller('ProductListController', function ($scope, $filter, productListActiveClass,
    productListPageCount) {
    var selectedCategory = null;

    // pagination state
    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;

    // called each time the menu buttons are clicked
    $scope.selectCategory = function selectCategory (newCategory) {
      selectedCategory = newCategory;

      // set page number to 1
      $scope.selectedPage = 1;
    };

    $scope.selectPage = function selectPage (newPage) {
      $scope.selectedPage = newPage;
    };

    // to get the active page class
    $scope.getPageClass = function (page) {
      return $scope.selectedPage == page ? productListActiveClass : "";
    };

    $scope.categoryFilterFn = function categoryFilterFn (product) {
      return selectedCategory == null ||
        product.category == selectedCategory;
    };

    $scope.getCategoryClass = function getCategoryClass (category) {
      return selectedCategory == category ? productListActiveClass : "";
    };
  });
