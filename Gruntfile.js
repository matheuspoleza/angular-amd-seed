module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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

  // Default task(s).
  grunt.registerTask('build', ['copy']);
  grunt.registerTask('start', ['http-server']);

};
