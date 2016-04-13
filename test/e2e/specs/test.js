// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'partial tests': function (browser) {
    browser
    .url('http://localhost:8088/partial.html')
      .waitForElementVisible('#app', 5000)
      .assert.containsText('#app', '默认值')
    .url('http://localhost:8088/list.html')
      .waitForElementVisible('#app', 5000)
    .end()
  }
}
