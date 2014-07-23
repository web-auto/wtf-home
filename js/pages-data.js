
var pages = {};
pages = _.extend(pages, getTutorialPage());
pages = _.extend(pages, getGuidePage());
pages = _.extend(pages, getApiPage());
pages = _.extend(pages, getApiWtfUtilPage());
pages = _.extend(pages, getMiscPage());

//pages = _.extend(pages, getErrorPage());
//pages = _.extend(pages, getExamplePage());



var navs = {};
navs = _.extend(navs, getTutorialNav());
navs = _.extend(navs, getGuideNav());
navs = _.extend(navs, getApiNav());
navs = _.extend(navs, getMiscNav());

//navs = _.extend(navs, getErrorNav());


// Meta data used by the AngularJS docs app
angular.module('pagesData', [])
  .value('NG_PAGES', pages)
  .value('NG_NAVIGATION', navs);
