  
  var yeomanConfig = {
    app: 'ember',
    dist: 'dist'
};
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');



  grunt.initConfig({
    clean: {
      build: {
        src: ["public/js/builds/*.js","public/css/builds/*.css"]
      },
      deploy: {
        src: ["public/js/builds/*.js","!public/js/builds/build.min.js","public/css/builds/*.css","!public/css/builds/main.min.css"]
      }
    },
    jshint: {
        files: ['ember/**/*.js']
    },
    watch: {
      libs: {
        files: ['public/js/libs/**/*.js'],
        tasks: ['concat:libs']
      },
      css: {
        files: ['public/css/*.css','public/js/libs/**/*.css'],
        tasks: ['concat:css']
      },
      templates: {
        files: ['ember/templates/*.hbs','ember/templates/**/*.hbs'],
        tasks: ['emberTemplates']
      },
      app: {
        files: ['ember/*.js','ember/**/*.js'],
        tasks: ['concat:app']
      }
    },
    connect: {
      server: {
        port: 8000,
        base: 'public',
        keepalive: true
      }
    },
    concat: {
      app: {
        src: [
          'ember/app.js',
          'ember/models/*.js',
          'ember/routes.js',
          'ember/routes/*.js',
          'ember/controllers/*.js',
          'ember/views/*.js'
        ],
        dest: 'public/js/builds/app.js',
        options: {
          separator: ';',
        }
      },
      libs: {
        src: [
              'public/js/libs/jquery/jquery.js',
              'public/js/libs/handlebars/handlebars.js',
              'public/js/libs/ember/ember.js',
              'public/js/libs/ember-data-shim/ember-data.js',
              'public/js/libs/bootstrap/dist/js/bootstrap.js'],
        dest: 'public/js/builds/libs.js',
        options: {
          separator: ';',
        }
      },
      css: {
        src: ['public/js/libs/bootstrap/dist/css/bootstrap.css','public/css/style.css'],
        dest: 'public/css/builds/main.css'
      },
      deploy: {
        src: ['public/js/builds/libs.js', 'public/js/builds/templates.js','public/js/builds/app.js'],
        dest: 'public/js/builds/build.js',
        options: {
          separator: ';',
        }
      }
    },
    uglify: {
      js: {
        src: 'public/js/builds/build.js',
        dest: 'public/js/builds/build.min.js'
      },
    },
    shell: {
        serve: {
            command: 'php artisan serve && echo "hey"'
        }
    },
    emberTemplates: {
      compile: {
        options: {
          templateBasePath: "ember/templates/"
        },
        files: {
        "public/js/builds/templates.js": ["ember/templates/*.hbs", "ember/templates/**/*.hbs"]
        }
      }
},
cssmin: {
  minify: {
    src: 'public/css/builds/main.css',
    dest: 'public/css/builds/main.min.css',
  }
}
  });
grunt.event.on('watch', function(action, filepath, target) {
  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
});
grunt.registerTask('serve',['shell:serve']);
grunt.registerTask('build',['jshint','clean:build','emberTemplates','concat']);
grunt.registerTask('default', ['build','watch']);
grunt.registerTask('deploy', ['concat:deploy','uglify','cssmin','clean:deploy']);
};