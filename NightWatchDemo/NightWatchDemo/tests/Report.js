
//nightwatch run cmd
//nightwatch tests/Report.js 

module.exports = {
    //'@disabled': true, // This will prevent the test module from running.

    '314a No Match': function (browser){
        var URL = require('../Repo/ReportURL');
        var REPO = require('../Repo/Navigation')
        browser
        .url(URL.ReportHome)
        .pause(100)
        .url(URL.report314aNoMatch)
        .waitForElementVisible('body',10000)
        .useXpath()
        .setValue(REPO.txt_BeginDate,"10/10/2010")
        .setValue(REPO.txt_EndDate,"10/10/2015")
        .assert.attributeEquals(REPO.txt_BeginDate,"value","10/10/2010")
        .assert.attributeEquals(REPO.txt_EndDate,"value","10/10/2015")
        .end();
    }
}