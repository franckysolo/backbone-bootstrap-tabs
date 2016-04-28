/**
 * DashboardView
 */
define([
        
   'jquery'
 , 'underscore'
 , 'backbone'
 , 'text!templates/dashboard.html'
 
], function ($, _, Backbone, Template) {
  
  'use strict';
  
  var DashboardView = Backbone.View.extend({
    
    el: '#dashboard',
    
    template: _.template(Template),
    
    render: function () {
      this.$el.html(this.template());
      return this;
    }
    
  });
  
  return DashboardView;
  
});