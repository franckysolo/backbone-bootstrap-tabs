/**
 * OptionsView
 */
define([
        
   'jquery'
 , 'underscore'
 , 'backbone'
 , 'text!templates/options.html'
 
], function ($, _, Backbone, Template) {
  
  'use strict';
  
  var OptionsView = Backbone.View.extend({
    
    el: '#options',
    
    template: _.template(Template),
    
    render: function () {
      this.$el.html(this.template());
      return this;
    }
    
  });
  
  return OptionsView;
  
});