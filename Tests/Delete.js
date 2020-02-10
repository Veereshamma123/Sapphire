describe('Delete functionality', function(){

var d=require("./../Data/DeleteData.js");
var obj=require("./../PageObjects/DeleteObjects.js");	
var EC = protractor.ExpectedConditions;
	
function deleteItem()
{
	obj.filter.clear().sendKeys(d.Deleting.storeId); //Entering the id in Filter
	browser.sleep(5000);
	
	obj.reload.click(); //Clicking on 'Reload' button
	browser.sleep(3000);
	
	if(obj.rows.isPresent()) //multiple records exists which contains the search criteria
	{
	//Verifying whether the created record exists or not in the tabular form
		obj.allRows.each(function(store)
		{
			store.element(by.css("td:nth-child(2)")).getText().then(function(text)
			{
				
				if(text==d.Deleting.storeId)
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
	
	browser.wait(EC.presenceOf(obj.storeLocations),5000);
	obj.storeLocations.click(); //Clicking on 'Store locations' button
		
	deleteItem();
	
	//Delete pop-up 
	var deletePopup = obj.popup;
	
	browser.wait(EC.presenceOf(deletePopup),10000);
	deletePopup.getText().then(function(text) {
		console.log(text);
		//Clicking on 'Yes' button from  the 'Delete location?' pop-up
		obj.yesButton.click();
				
		browser.wait(EC.presenceOf(obj.toastMessage),10000);
		
		obj.toastMessage.getText().then(function(text)
		{
			console.log(text);
		})
			
		expect(obj.toastMessage.isDisplayed()).toBe(true);
		browser.sleep(3000);
		
	})
				
});


})



