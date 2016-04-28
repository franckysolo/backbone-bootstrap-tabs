/**
 * 
 */
define([
   'jquery'
 , 'underscore'
 , 'backbone'
 , '../views/dashboard'
 , '../views/tasks'
 , '../views/options'
], function ($, _, Backbone, DashboardView, TasksView, OptionsView) {
  
  'use strict';
  
  var Router = Backbone.Router.extend({
    
    routes: {
      dashboard: 'dashboard',
      tasks: 'tasks',
      options: 'options'
    },
    
    /**
     * Dashboard tabs
     */
    dashboard: function () {
      var view = new DashboardView();
      view.render();
    },
    
    /**
     * Tasks tabs
     */
    tasks: function () {
      var view = new TasksView();
      view.render();
    },
    
    /**
     * Options tabs
     */
    options: function () {
      var view = new OptionsView();
      view.render();
    },
    
  });
  
  var initialize = function () {
    
    var router = new Router();
    
    $('.nav-tabs a').on('click', function () {
      var target = $(this).attr('href').split("/")[0];
      router.navigate(target, {trigger: true});
    });
    
    Backbone.history.on('route', function(router, event) {
      var fragment = this.fragment.split("/")[0];
      $('.nav-tabs a[href="#' + fragment + '"]').trigger('click');
    });
  
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };   
});