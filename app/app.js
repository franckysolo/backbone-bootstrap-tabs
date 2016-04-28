define([
   'jquery'
 , 'underscore'
 , 'backbone'
 , 'bootstrap'
 , 'routers/router'
], function ($, _, Backbone, Bootstrap, Router) {
  
  var initialize = function () {
    Router.initialize();
  };

  return {
    initialize: initialize
  };
});