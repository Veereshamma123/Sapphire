function loginSearch() 
{
	//Login functionality
	this.widget=element(by.className("auth0-lock-widget-container"));
	this.loginButton=element(by.className("auth0-lock-social-button-text"));
	this.emailId=element(by.name("loginfmt"));
	this.nextButton=element(by.id('idSIButton9'));
	this.password=element(by.name("passwd"));
	this.signIn=element(by.id("idSIButton9"));
	this.yesButton=element(by.id("idSIButton9"));
	this.title=element(by.className("header-logo"));
	
	this.getURL=function() {
		browser.get('https://test-int-sapphire.syndigo.com');
		console.log("Hitting the browser");
	};
	
	//Search functionality
	this.currentProjects=element(by.className("mat-tab-labels")).element(by.css("div:nth-child(2)"));
	this.filter=element(by.id('txt_FilterProjects'));
	this.rows=element(by.css("tbody tr"));
	this.allRows=element.all(by.css("tbody tr"));
	//this.secondColumn=element(by.css("td:nth-child(2)"));
	this.projectId=element(by.css("tbody tr td:nth-child(2)"));
	this.openIcon=element(by.id('dark-gray'));
	
	
	//Opening client
	this.viewClient=element(by.id("btn_ViewClient"));
	this.clientName=element(by.xpath("/html/body/app-root/app-layout/app-loader/div/div/div[2]/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/app-client-details-layout/app-inner-side-nav-layout/div/div[2]/app-inner-side-nav/div/div[1]/div/div/span"));
	
};

//to use the objects in different javascript file
module.exports=new loginSearch();
