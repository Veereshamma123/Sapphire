function login() 
{
	this.widget=element(by.className("auth0-lock-widget-container"));
	this.loginButton=element(by.className("auth0-lock-social-button-text"));
	this.emailId=element(by.name("loginfmt"));
	this.nextButton=element(by.id('idSIButton9'));
	this.password=element(by.name("passwd"));
	this.signIn=element(by.id("idSIButton9"));
	this.yesButton=element(by.id("idSIButton9"));
	this.title=element(by.className("header-logo"));
	
	//method
	this.getURL=function() {
		browser.get('https://test-int-sapphire.syndigo.com');
		console.log("Hitting the browser");
	};
};

//to use the objects in different javascript file
module.exports=new login();
