module.exports = {
  'Home Page message its correct': function homePage(test) {
    test.maximize()
      .open('http://localhost:9000')
      .click('.home')
      .assert.text('h3').is('Home Page')
      .screenshot('./spec/e2e/screenshots/:browser/amd-app_:timestamp.png')
      .done();
  }
};
