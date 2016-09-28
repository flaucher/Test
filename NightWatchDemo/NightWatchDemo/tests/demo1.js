///<reference path="../helpers/vs-intellisense-definitions.js" />
//Triple-slash directives are single-line comments containing a single XML tag. The contents of the comment are used as compiler directives.


//nightwatch run cmd
//nightwatch tests/demo1.js 
//<reference path="c:/NODEJS/workSpace/vs-intellisense-definitions.js" />

module.exports = {
    'demo test Google' : function (browser) 
    {/// <param name="browser" type="_Browser">
       
    },


    'demo test Google twice' : function (browser) {
       
        
        browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      
     // .setValue(REPO.txt_BeginDate,"10/10/2010")
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
    }
}
