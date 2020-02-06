describe('Delete functionality', function(){

var EC = protractor.ExpectedConditions;
	
function deleteItem(storeid)
{
	element(by.id('txt_Filter')).clear().sendKeys(storeid); //Entering the id in Filter
	browser.sleep(5000);
	
	element(by.css("button[mattooltip='Reload']")).click(); //Clicking on 'Reload' button
	browser.sleep(3000);
	
	if(element(by.css("tbody tr")).isPresent()) //multiple records exists which contains the search criteria
	{
	//Verifying whether the created record exists or not in the tabular form
		element.all(by.css("tbody tr")).each(function(store)
		{
			store.element(by.css("td:nth-child(2)")).getText().then(function(text)
			{
				if(text==storeid)
				{
					console.log(text+ "Store id is found for performing delete operation");
					
					//clicking on Delete button of the added store
					store.element(by.css("td:nth-child(8) mat-icon:nth-child(2)")).click();
					browser.sleep(3000);
					
				}
			})
		})
	} 
	else
	{
		console.log("Store id doesn't exists");
	}
}

it('Delete store location', function(){
	
	var storeid = 114;
	browser.sleep(1000);
	browser.wait(EC.presenceOf(element(by.id('menu_StoreLocations'))),5000);
	element(by.id('menu_StoreLocations')).click(); //Clicking on 'Store locations' button
		
	deleteItem(storeid);
	
	//Delete pop-up 
	var deletePopup = element(by.className("cdk-overlay-pane"));
	
	browser.wait(EC.presenceOf(deletePopup),10000);
	deletePopup.getText().then(function(text) {
		console.log(text);
		//Clicking on 'Yes' button from  the 'Delete location?' pop-up
		element(by.css("div[class='confirmation-dialog-actions mat-dialog-actions']")).element(by.css("button:nth-child(2)")).click();
				
		browser.wait(EC.presenceOf(element(by.cssContainingText("div[class='snack-bar-text']", "Location deleted."))),10000);
		
		element(by.cssContainingText("div[class='snack-bar-text']", "Location deleted.")).getText().then(function(text)
		{
			console.log(text);
		})
			
		expect(element(by.cssContainingText("div[class='snack-bar-text']", "Location deleted.")).isDisplayed()).toBe(true);
		browser.sleep(3000);
		
	})
				
});


})



