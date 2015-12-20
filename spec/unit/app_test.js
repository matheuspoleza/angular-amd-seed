define(['app', 'angularAMD'], function (app, angularAMD) {
  describe('app.js', function () {
      console.log('### Running app_test.js: ');

      it('app should be defined.', function () {
          expect(app).toBeDefined();
      });

      it('angularAMD must be bootstrapped', function (done) {
          var i = 0, retries = 5;
          var interval = setInterval(function () {
              var bootstrapped = true;
              i += 1;

              try {
                  var a = angularAMD.appname();
              } catch(err) {
                  bootstrapped = false;
                  console.log("Waiting for angularAMD to boostrap, attempt " + i + ".  Error: " + err);
              }

              if (bootstrapped) {
                  clearInterval(interval);
                  console.log('### angularAMD bootstrapped.');
                  done()
              } else {
                  if (i>retries) {
                      clearInterval(interval);
                  }
              }
          }, 999)
      });
  });
});
