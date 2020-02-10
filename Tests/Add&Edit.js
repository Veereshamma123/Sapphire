describe('Add & Edit functionlity', function() {

	var d=require("./../Data/Add&EditData.js");
	var obj=require("./../PageObjects/Add&EditObjects.js");	
	var EC = protractor.ExpectedConditions;
	
	
	it('Add store location', function(){
		
		obj.storeLocations.click(); //Clicking on 'Store locations' button
		browser.sleep(3000);
	
		obj.addButton.click(); //Clicking on 'Add' button
		browser.sleep(3000);
		
		obj.storeId.sendKeys(d.Adding.storeId); //Entering store id 
		obj.address.sendKeys(d.Adding.address); //Entering Address 1
		obj.city.sendKeys(d.Adding.city); //Entering City
		obj.state.sendKeys(d.Adding.state); //Entering State
		obj.zip.sendKeys(d.Adding.zip); //Entering ZIP
		obj.save.click(); //Clicking on Save		
			
		browser.wait(EC.presenceOf(obj.toastMessage),10000);
		
		obj.toastMessage.getText().then(function(text)
		{
			
			if(text==d.Adding.toastMessage)
			{
				console.log("Store created successfully");
			}
			else
			{
				console.log("Store already exists");
			}
		})
			
		expect(obj.toastMessage.getText()).toBe(d.Adding.toastMessage);
		browser.sleep(3000);		
				
	}),
	
	
	it('Edit store location', function(){
		
		obj.back.click(); //Clicking on back button, navigating back to 'Store locations'
		browser.sleep(3000);
		
		obj.filter.sendKeys(d.Adding.storeId); //Entering the id in Filter
		browser.sleep(5000);
			
		obj.reload.click(); //Clicking on 'Reload' button
		browser.sleep(3000);
		
		if(obj.rows.isPresent()) //multiple records with that search criteria, click on the edit icon of recently created record 
		{
			//Verifying whether the created record exists or not in the tabular form
			obj.allRows.each(function(store)
			{
				store.element(by.css("td:nth-child(2)")).getText().then(function(text)
				{
					if(text==d.Adding.storeId)
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
			obj.editIcon.click();
		}
		
		//Editing the value in City field 
		browser.sleep(5000);
		obj.editCity.click().clear().sendKeys(d.Editing.editCity);
				
		//Clicking the save icon after entering the edited text 
		obj.editSave.click();

		browser.wait(EC.presenceOf(obj.toast),10000);	
		
		obj.toast.getText().then(function(text)
		{
			console.log(text);
		})
		
		expect(obj.toast.getText()).toBe(d.Editing.toast);
		browser.sleep(3000);
	});	
	
});

