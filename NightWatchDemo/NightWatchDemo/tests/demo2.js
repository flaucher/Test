///<reference path="../helpers/vs-intellisense-definitions.js" />
//<reference path="/NODEJS/workSpace/vs-intellisense-definitions.js" />
module.exports = {
    'demo test Google Trump' : function (browser) 
    {/// <param name="browser" type="_Browser">
      
       
        var REPO = require('../Repo/Navigation');
       
       
        browser
        
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
     // .setValue(REPO.txt_BeginDate,"10/10/2010")
      .setValue(REPO.txt_searchField, 'trump')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .verify.containsText('#main', 'trump')
      .end();
    },


    'demo test Google Maine' : function (browser) {
       
        
        browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      
     // .setValue(REPO.txt_BeginDate,"10/10/2010")
      .setValue('input[type=text]', 'maine')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      //.assert.containsText('#main', 'Night Watch')
      .end();
    }
}
