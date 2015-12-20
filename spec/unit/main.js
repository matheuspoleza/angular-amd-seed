!function () {
    'use strict';
   	/*
    Create list of file to run in test.  Making sure that app_test.js is
    always the first to run
    */
    var firstFile, firstFileREGEXP = /app_test\.js$/i, testFiles = [], testFilesREGEXP = /(spec|test)\.js$/i;

    Object.keys(window.__karma__.files).forEach(function (file) {
        if (firstFileREGEXP.test(file)) {
            firstFile = file;
        } else if (testFilesREGEXP.test(file)) {
            testFiles.push(file);
        }
    });

    if (firstFile) {
        testFiles.unshift(firstFile);
    }

    require(['/base/src/app/config/dependencies.js', '/base/src/app/config/path.js'], function(dependencies,path){
      require.config({
          baseUrl: '/base/src/app',
          paths: path,
          shim: dependencies,
          deps: testFiles,
          callback: window.__karma__.start,
      });
    });
}();
