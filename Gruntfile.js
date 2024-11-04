'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      css: {
        src: ['src/assets/css/*.css'],
        dest: 'build/assets/css/style.min.css'
      }
    },
    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      css: {
        src: 'build/assets/css/style.min.css',
        dest: 'build/assets/css/style.min.css'
      }
    },
    copy: {
      files: {
        expand: true,
        cwd: 'src/assets/',
        src: ['img/*'],
        dest: 'build/assets/'
      }
    },
    watch: {
      css: {
        files: '<%= concat.css.src %>',
        tasks: ['build']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['concat', 'cssmin', 'copy']);
};
