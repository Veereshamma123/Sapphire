describe('Add & Edit functionlity', function() {

	var EC = protractor.ExpectedConditions;
	var storeid = 114;
	var city="Franklin";
	var editcity="New york";
	
	it('Add store location', function(){
		
		element(by.id('menu_StoreLocations')).click(); //Clicking on 'Store locations' button
		browser.sleep(3000);
	
		element(by.id('btn_CreateStore')).click(); //Clicking on 'Add' button
		browser.sleep(3000);
		
		element(by.id("txtStoreID")).sendKeys(storeid); //Entering store id 
		element(by.id("txtAddress1")).sendKeys("900 Park Ave"); //Entering Address 1
		element(by.id("txtCity")).sendKeys(city); //Entering City
		element(by.id("txtState")).sendKeys("ND"); //Entering State
		element(by.id("txtZip")).sendKeys("92521"); //Entering ZIP
		element(by.id("btn_Save")).click(); //Clicking on Save
	
		browser.wait(EC.presenceOf(element(by.css("div[class='snack-bar-text']"))),10000);
		
		element(by.css("div[class='snack-bar-text']")).getText().then(function(text)
		{
			
			if(text=="Store created.")
			{
				console.log("Store created successfully");
			}
			else
			{
				console.log("Store already exists");
			}
		})
			
		expect(element(by.css("div[class='snack-bar-text']")).isDisplayed()).toBe(true);
		browser.sleep(3000);
			
				
	});
	
	
	it('Edit store location', function(){
		
		element(by.css("button[class='back-button']")).click(); //Clicking on back button, navigating back to 'Store locations'
		browser.sleep(3000);
		
		element(by.id('txt_Filter')).sendKeys(storeid); //Entering the id in Filter
		browser.sleep(5000);
			
		element(by.css("button[mattooltip='Reload']")).click(); //Clicking on 'Reload' button
		browser.sleep(3000);
		
		if(element(by.css("tbody tr")).isPresent()) //multiple records with that search criteria, click on the edit icon of recently created record 
		{
			//Verifying whether the created record exists or not in the tabular form
			element.all(by.css("tbody tr")).each(function(store)
			{
				store.element(by.css("td:nth-child(2)")).getText().then(function(text)
				{
					if(text==storeid)
					{
						console.log(text+ "Added store id found successfully");
						
						//clicking on Edit button of the added store
						store.element(by.css("td:nth-child(8) mat-icon:nth-child(1)")).click();
						browser.sleep(3000);
					}
				})
			})
		} 
		else //Only single record exists, then click on the edit icon directly
		{
			element(by.css("mat-icon[aria-label='Edit Store Location']")).click();
		}
		
		//Editing the value in City field 
		browser.sleep(5000);
		element(by.css("td[class='col-city mat-cell cdk-column-city mat-column-city ng-star-inserted'] input")).click().clear().sendKeys(editcity);
				
		//Clicking the save icon after entering the edited text 
		element(by.css("mat-icon[aria-label='Save Edit']")).click();

		browser.wait(EC.presenceOf(element(by.cssContainingText("div[class='snack-bar-text']", "Store location saved."))),10000);	
		
		element(by.cssContainingText("div[class='snack-bar-text']", "Store location saved.")).getText().then(function(text)
		{
			console.log(text);
		})
		
		expect(element(by.cssContainingText("div[class='snack-bar-text']", "Store location saved.")).isDisplayed()).toBe(true);
		browser.sleep(3000);
	});	
	
});

