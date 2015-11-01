define(['src/app/config/dependencies.js', 'src/app/config/path.js'], function(dependencies, paths){
  require.config({
    baseUrl: '/src/app',
    paths: paths,
    shim: dependencies,
    deps: ['app']
  });
});
