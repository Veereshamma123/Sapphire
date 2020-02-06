describe('Sapphire', function() {
  
	//var data=require("./../Data/Login&SearchData.js");
	var obj=require("./../PageObjects/Login&SearchObjects.js");
	var using=require('jasmine-data-provider'); // For using data driven testing
	
	browser.ignoreSynchronization=true;
	
	it('Login functionality', function() {
		
		obj.getURL();
		browser.sleep(10000);
		
		expect(obj.widget.isDisplayed()).toBe(true);
		
		obj.loginButton.click(); //Clicking on 'LOG IN AT SYNDIGO.COM' button
		browser.sleep(3000);
		obj.emailId.sendKeys('veereshamma.kake@syndigo.com'); //Entering email id
		obj.nextButton.click(); //Clicking on 'Next button' after entering email id 
		browser.sleep(1000);
		obj.password.sendKeys('VEERU123$'); //Entering password
		browser.sleep(1000);
		obj.signIn.click(); //Clicking on 'Sign in' button after entering password
		browser.sleep(3000);
		obj.yesButton.click(); //CLicking on 'Yes' button - 'Do this to reduce the number of times you are asked to sign in.'
		browser.sleep(3000);
			
		obj.title.getText().then(function (text) {
			console.log(text); //For Sapphire title
		})
		expect(obj.title.isDisplayed()).toBe(true); //Login successful
		browser.sleep(3000);
		
	});
	
			
	/*it('Search functionality', function() {
		
			var projectId = "2899";
			
			element(by.className("mat-tab-labels")).element(by.css("div:nth-child(2)")).click(); //Navigating to 'Current projects' tab
			browser.sleep(3000);
			
			element(by.id('txt_FilterProjects')).sendKeys(projectId); //Entering project name in Filter
			browser.sleep(2000);
			
			//Verifying whether the selected project is opened or not
			if(element(by.css("tbody tr")).isPresent()) //multiple records exists which contains the search criteria
			{
			//Verifying whether the created record exists or not in the tabular form
				element.all(by.css("tbody tr")).each(function(store)
				{
					store.element(by.css("td:nth-child(2)")).getText().then(function(text)
					{
						if(text==projectId)
						{
							console.log(text+ " - Project id is found");
							
						}
					})
				})
			} 
			
			expect(element(by.css("tbody tr td:nth-child(2)")).getText()).toBe(projectId);
			
			element(by.id('dark-gray')).click(); // Icon to open the project
			browser.sleep(3000);
		
	});
	
	
	it('Opening client', function() {
	
			var clientName = 'Speedway';
		
			browser.sleep(3000);
			element(by.id('btn_ViewClient')).click(); //Clicking on 'View client' button
						
			// Switching to Client tab
			browser.getAllWindowHandles().then(function (handles)
			{
				browser.switchTo().window(handles[1]);
				browser.getTitle().then(function(title){
					console.log("Title of the switched window is " +title);
				})
			}); 
			
			browser.sleep(3000);
			
			//Verifying whether the selected client is opened or not
			element(by.css("div[class='menu-panel-header'] div div span")).getText().then(function(text)
			{
				console.log("Navigated to the selected client : " +text);
			})	
			expect(element(by.css("div[class='menu-panel-header'] div div span")).getText()).toEqual(clientName);
			
			browser.sleep(5000);
		
	})*/
		
})  