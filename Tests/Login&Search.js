describe('Sapphire', function() {
  
	var d=require("./../Data/Login&SearchData.js");
	var obj=require("./../PageObjects/Login&SearchObjects.js");
	var using=require('jasmine-data-provider'); // For using data driven testing
	
	browser.ignoreSynchronization=true;
	
	//setup method - Should be outside of it block
	/*beforeEach(function(){
		obj.getURL();
		browser.sleep(10000);
	})
	*/
	
	it('Login functionality', function() 
	{			
		obj.getURL();
		browser.sleep(10000);
		
		expect(obj.widget.isDisplayed()).toBe(true);
		
		obj.loginButton.click(); //Clicking on 'LOG IN AT SYNDIGO.COM' button
		browser.sleep(3000);
	
		obj.emailId.sendKeys(d.LoginData.username); //Entering email id
		obj.nextButton.click(); //Clicking on 'Next button' after entering email id 
		browser.sleep(1000);
		obj.password.sendKeys(d.LoginData.password); //Entering password
		browser.sleep(1000);
		obj.signIn.click(); //Clicking on 'Sign in' button after entering password
		browser.sleep(3000);
		obj.yesButton.click(); //CLicking on 'Yes' button - 'Do this to reduce the number of times you are asked to sign in.'
		browser.sleep(3000);
			
		obj.title.getText().then(function (text) {
			console.log(text); //For Sapphire title
		})
		expect(obj.title.getText()).toBe(d.LoginData.title); //Login successful
		browser.sleep(3000);
			
	});
	
			
	it('Search functionality', function() {
			
			obj.currentProjects.click(); //Navigating to 'Current projects' tab
			browser.sleep(3000);
			
			obj.filter.sendKeys(d.Search.projectId); //Entering project name in Filter
			browser.sleep(2000);
			
			//Verifying whether the selected project is opened or not
			if(obj.rows.isPresent()) //multiple records exists which contains the search criteria
			{
				obj.allRows.each(function(store)
				{
					store.element(by.css("td:nth-child(2)")).getText().then(function(text)
					{
						if(text==d.Search.projectId)
						{
							console.log(text+ " - Project id is found");
							
						}
					})
				})
			} 
			
			expect(obj.projectId.getText()).toBe(d.Search.projectId);
			
			obj.openIcon.click(); // Icon to open the project
			browser.sleep(3000);
		
	});
	
	
	it('Opening client', function() {
	
			browser.sleep(3000);
			obj.viewClient.click(); //Clicking on 'View client' button
				
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
			obj.clientName.getText().then(function(text)
			{
				console.log("Navigated to the selected client : " +text);
			})	
			expect(obj.clientName.getText()).toEqual(d.OpenClient.clientName);
			
			browser.sleep(3000);
		
	})
		
})  