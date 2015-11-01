module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    copy : {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              'bower_components/**/*.min.js',
              'bower_components/**/*.min.js.map',
              'bower_components/requirejs/require.js'
            ],
            dest: 'src/libs'
          },
        ],
      },
    },

    'http-server': {
      dev: {
        port: 9000,
        host: 'localhost',
        showDir : true,
        autoIndex: true,
        ext: 'html',
        runInBackground: false
      }
    }
  });

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('build', ['copy']);
  grunt.registerTask('test', ['karma']);
  grunt.registerTask('default', ['copy'], ['karma']);
  grunt.registerTask('start', ['http-server']);

};
