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
              'node_modules/**/*.min.js',
              'node_modules/**/*.min.js.map',
              'node_modules/requirejs/require.js'
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
    },

    dalek: {
      dist: {
        src: ['spec/e2e/home-spec.js']
      }
    }

  });

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-dalek');

  // Default task(s).
  grunt.registerTask('build', ['copy']);
  grunt.registerTask('test', ['karma']);
  grunt.registerTask('e2e', ['dalek']);
  grunt.registerTask('start', ['http-server']);

};
