describe('Add functionlity', function() {

	var r=require("./../PageObjects/RandomStoreGeneration.js");
	var d=require("./../Data/AddData.js");
	var obj=require("./../PageObjects/AddObjects.js");	
	var EC = protractor.ExpectedConditions;
		
	function createStore()
	{
		obj.addButton.click(); //Clicking on 'Add' button
		browser.sleep(3000);
		//random = r.storeValue;
		random = r.id;
		
		obj.storeId.sendKeys(random); //Entering store id 
		console.log("Store id - " + random);
		obj.address.sendKeys(d.Adding.address); //Entering Address 1
		obj.city.sendKeys(d.Adding.city); //Entering City
		obj.state.sendKeys(d.Adding.state); //Entering State
		obj.zip.sendKeys(d.Adding.zip); //Entering ZIP
		obj.save.click(); //Clicking on Save		
		
		browser.wait(EC.presenceOf(obj.toastMessage),10000);
		
	}

	
	it('Add store location', function(){
		
		browser.wait(EC.presenceOf(obj.storeLocations),10000);
		obj.storeLocations.click(); //Clicking on 'Store locations' button
		browser.sleep(3000);
		
		createStore();
		
		obj.toastMessage.getText().then(function(text)
		{
					
			if(text==d.Adding.toastMessage)
			{
				console.log("Store created successfully");
			}
			else
			{
				console.log("Store already exists");
				
				obj.back.click(); //Clicking on back button, navigating back to 'Store locations'
				browser.sleep(3000);
				
				createStore();		
			}
		
		})
			
		expect(obj.toastMessage.getText()).toBe(d.Adding.toastMessage);
		browser.sleep(3000);		
			
	})
	
});

