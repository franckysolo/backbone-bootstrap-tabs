
require.config({
  
  paths: {
    jquery: 'vendor/jquery/dist/jquery',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone',
    text: 'vendor/text/text',
    bootstrap: 'vendor/bootstrap/dist/js/bootstrap',
    templates: 'views/templates',
  },
  
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps:['underscore', 'jquery'],
      exports: 'Backbone'
    },
    bootstrap: {
      deps:['jquery'],
      exports: '$'
    },
     
  }
});

require(['app'], function (App) {
  App.initialize();
});