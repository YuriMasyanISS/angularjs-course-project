/**
 * Created by y.masyan on 07.03.2017.
 */
/**
 * Created by y.masyan on 06.03.2017.
 */

angular.module('app').factory('searchService', function () {
  let searchService = {searchField:{}};

  searchService.searchField.search='1';
  searchService.clearSearch = function () {
    searchService.searchField.search = '';
  };

  return searchService;
});
