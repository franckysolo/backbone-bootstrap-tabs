/**
 * 
 */
module.exports = function (grunt) {
  
  
  var prefix = 'grunt-contrib-',
    npms = [ 
            'jshint', 
            'less',
            'symlink',
            'requirejs',
    ];

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
        
    jshint: {
          options: {
              reporter: require('jshint-stylish'),
              laxcomma: true
          },
          target: [
               'app/collections/*.js'
             , 'app/models/*.js'
             , 'app/routers/*.js'
             , 'app/views/*.js'
          ]
    },
        
    less: {
      main : {    
        src:  'app/assets/less/compile.less',
        dest: 'app/dist/css/compile.css'
      },
    },
    
    symlink: {
      options: {
        overwrite: true
      },
      fonts: {
        src:  'app/vendor/bootstrap/fonts',
        dest: 'app/dist/fonts'
      },  
    },
    

    requirejs: {
      compile: {
        options: {    
          baseUrl: 'app',  
          
          paths: {
            jquery: 'vendor/jquery/dist/jquery',
            underscore: 'vendor/underscore/underscore',
            backbone: 'vendor/backbone/backbone',
            text: 'vendor/text/text',
            bootstrap: 'vendor/bootstrap/dist/js/bootstrap',
            templates: 'views/templates',
          },
          
          name: 'main',
          out: 'app/main-built.js',
          preserveLicenseComments: false,
          findNestedDependencies  : true,
          enforceDefine: false,
        }
      }
    }
    
  });
  
  npms.forEach(function(key) {
    grunt.loadNpmTasks(prefix + key);
  });
  
  grunt.registerTask('default', ['less', 'symlink']);
  grunt.registerTask('js', ['jshint']);
  grunt.registerTask('optimize', ['requirejs']);
};