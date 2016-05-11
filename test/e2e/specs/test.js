// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'partial tests': function (browser) {
    browser
    .url('http://localhost:8088/Partial.html')
      .waitForElementVisible('#app', 5000)
      .assert.containsText('#app', '默认值')
    .url('http://localhost:8088/List.html')
      .waitForElementVisible('#app', 5000)
    .end()
  }
}
