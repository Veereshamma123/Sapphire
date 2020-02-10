var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		
  //If we want to run in chrome browser, no need to specify selenium address and no need to start server. But, need to specify selenium address for running in other browser. Otherwise, behavior will not be consistent
  //Running the code without starting selenium server is called as 'Direct Connect' --> directConnect: true
 // seleniumAddress: 'http://localhost:4444/wd/hub', //Need to comment when we are running with package.json
  specs: ['Tests/Login&Search.js','Tests/Upload.js','Tests/Add&Edit.js','Tests/Delete.js','Tests/DeleteAll.js'], 
  
  //Global pre-requisite for all the test cases in a project, it will run before the execution of all the spec files
  onPrepare: function(){
	  browser.driver.manage().window().maximize();
	  global.EC = protractor.ExpectedConditions;
	  //For screenshots
	  jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		  );
  },
 
jasmineNodeOpts: {
	defaultTimeoutInterval: 200000
	},

//to run either smoke tests or regression tests
suites:
{
	Smoke: ['Tests/Login&Search.js','Tests/Upload.js','Tests/Add&Edit.js','Tests/Delete.js','Tests/DeleteAll.js'], 
	Regression: 'Login&Search.js'
}
	  	
  
  //to run in firefox browser
 /* capabilities: {
	  'browserName': 'firefox'
  }

 //drivers path --> C:\Users\anupama.gajjala\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium
 //By default, internet explorer driver doesn't exists in that path. To run in internet explorer, need to run the cmd --> webdriver-manager --ie
 /*capabilities: {
	  'browserName': 'internet explorer'
  }*/
};