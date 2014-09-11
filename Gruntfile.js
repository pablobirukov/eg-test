module.exports = function (grunt) {
  grunt.initConfig({

//    concat: {
//      main: {
//        src: 'blocks/*/*.js',
//        dest: 'build/scripts/main.js'
//      }
//    },
//    uglify: {
//      main: {
//        files: {
//          'build/scripts/main.min.js': '<%= concat.main.dest %>'
//        }
//      }
//    },
//    csso: {
//      compress: {
//        options: {
//          report: 'min'
//        },
//        src:  'blocks/*/*.css',
//        dest: 'build/styles/main.min.css'
//      }
//    },
//    htmlmin: {
//      files: {
//        expand: true,
//        src: './*.html',
//        dest: 'build/',
//        ext: '.html'
//      },
//      options: {
//        collapseWhitespace: true
//      }
//    },
//    copy: {
//      main: {
//        files: [{
//          expand: true,
//          src: 'blocks/*/*.png',
//          dest: 'build/images/',
//          flatten: true
//        }]
//      }
//    },
//    clean: ['build/*', '!build/.svn'],
//    connect: {
//      dev: {
//        options: {
//          hostname: '*',
//          base: 'build/',
//          port: 8081
//        }
//      }
//    },
//    watch: {
//      concat: {
//        files: '<%= concat.main.src %>',
//        tasks: ['concat', 'uglify']
//      },
//      csso: {
//        files: '<%= csso.compress.src %>',
//        tasks: 'csso'
//      },
//      htmlmin: {
//        files: '<%= htmlmin.files.src %>',
//        tasks: 'htmlmin'
//      }
//    }
    clean: ['build/*'],
    copy: {
      main: {
        files: [{
          src: '**',
          dest: 'build/',
          expand: true,
          cwd: 'src/'
        }
      ]}
    },
    jshint: {
      all: ['src/*.js', 'src/*/*.js', '!src/lib/*']
//      all: ['src/lib/morearty-0.3.1.js']
    },
    watch: {
      scipts: {
        files: ['src/**', '!src/lib/*'],
        tasks: ['build']
      }
    }
  });

//  grunt.loadNpmTasks('grunt-contrib-concat');
//  grunt.loadNpmTasks('grunt-contrib-uglify');
//  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-contrib-watch');
//  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');


//  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'csso', 'htmlmin', 'copy']);
//  grunt.registerTask('dev', ['connect', 'watch']);
  grunt.registerTask('build', ['jshint', 'clean', 'copy']);
  grunt.registerTask('serve', ['build', 'watch']);

};