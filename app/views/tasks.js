/**
 * TasksView
 */
define([
        
   'jquery'
 , 'underscore'
 , 'backbone'
 , 'text!templates/tasks.html'

], function ($, _, Backbone, Template) {
  
  'use strict';
  
  var TasksView = Backbone.View.extend({
    
    el: '#tasks',
    
    template: _.template(Template),
    
    render: function () {
      this.$el.html(this.template());
      return this;
    }
  
  });
  
  return TasksView;
  
});