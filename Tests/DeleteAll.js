describe('DeleteAll functionality', function(){

var obj=require("./../PageObjects/DeleteAllObjects.js");
var EC = protractor.ExpectedConditions;
	
function deleteAll()
{
	
	if(obj.recordsCount.isPresent())
	{
		console.log("All locations are deleted successfully");
		browser.sleep(5000);
	}
	else
	{
		console.log("All locations are not deleted successfully");
	}
}

	
it('DeleteAll store locations', function(){
	
	browser.wait(EC.presenceOf(obj.locations),5000);
	obj.locations.click(); //Clicking on 'Locations' button
	browser.sleep(3000);
	
	//Delete All records 
	obj.deleteAllButton.click(); //Clicking on 'Delete All' button
	browser.sleep(3000);
	
	//DeleteAll pop-up
	var deleteAllPopup = obj.popup;
	browser.wait(EC.presenceOf(deleteAllPopup),10000);
	deleteAllPopup.getText().then(function(text) {
		console.log(text);
		
		//Clicking on 'Yes' button from 'DeleteAll locations' pop-up
		obj.yesButton.click();
		
		browser.wait(EC.presenceOf(obj.recordsCount),5000);
		obj.recordsCount.getText().then(function(text)
		{
			console.log(text);
		})
		expect(obj.recordsCount.isDisplayed()).toBe(true);
			
		deleteAll();
		browser.sleep(3000);
		
	})
				
});


})



