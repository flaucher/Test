
//nightwatch run cmd
//nightwatch tests/demo1.js 
module.exports = {
    'demo test Google roosevelt' : function (browser) {
       
        var REPO = require('../Repo/Navigation');
       
        
        browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
     // .setValue(REPO.txt_BeginDate,"10/10/2010")
      .setValue(REPO.txt_searchField, 'roosevelt')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .verify.containsText('#main', 'roosevelt')
      //.assert.containsText
      
      .end();
    },


    'demo test Google Florida' : function (browser) {
       
        
        browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      
     // .setValue(REPO.txt_BeginDate,"10/10/2010")
      .setValue('input[type=text]', 'Florida')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      //.assert.containsText('#main', 'Night Watch')
      .end();
    }
}
