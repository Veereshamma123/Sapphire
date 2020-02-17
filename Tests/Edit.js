describe('Edit functionlity', function() {

	var r=require("./../PageObjects/RandomStoreGeneration.js");
	var d=require("./../Data/EditData.js");
	var obj=require("./../PageObjects/EditObjects.js");	
	var EC = protractor.ExpectedConditions;

it('Edit store location', function(){
		
		random = r.id;
	
		obj.back.click(); //Clicking on back button, navigating back to 'Store locations'
		browser.sleep(3000);
		
		obj.filter.sendKeys(random); //Entering the id in Filter
		browser.sleep(3000);
			
		obj.reload.click(); //Clicking on 'Reload' button
		browser.sleep(3000);
		
		if(obj.rows.isPresent()) //multiple records with that search criteria, click on the edit icon of recently created record 
		{
			//Verifying whether the created record exists or not in the tabular form
			obj.allRows.each(function(store)
			{
				store.element(by.css("td:nth-child(2)")).getText().then(function(text)
				{
					if(text==random)
					{
						console.log(text + " - Added store id found successfully");
						
						//clicking on Edit button of the added store
						store.element(by.css("td:nth-child(8) mat-icon:nth-child(1)")).click();
						browser.sleep(2000);
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

})