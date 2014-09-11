module.exports = function (grunt) {
  grunt.initConfig({

    clean: ['build/*', '!build/.git'],
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
    },
    watch: {
      scipts: {
        files: ['src/**', '!src/lib/*'],
        tasks: ['build']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['jshint', 'clean', 'copy']);
  grunt.registerTask('serve', ['build', 'watch']);

};