requirejs({
  baseUrl: 'scripts',
  paths: {
    jquery: 'lib/jquery',
  }
})
requirejs(['jquery'], function() {
  requirejs(['pages/index']);
});
