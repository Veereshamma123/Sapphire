describe('DeleteAll functionality', function(){

function deleteAll()
{
	
	if(element(by.cssContainingText("div[class='mat-paginator-range-actions'] div[class='mat-paginator-range-label']", "0 of 0")).isPresent()) //multiple records exists
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
	
	browser.wait(EC.presenceOf(element(by.id('menu_Locations'))),5000);
	element(by.id('menu_Locations')).click(); //Clicking on 'Locations' button
	browser.sleep(3000);
	
	//Delete All records 
	element(by.id('btn_ClearAll')).click(); //Clicking on 'Delete All' button
	browser.sleep(3000);
	
	//DeleteAll pop-up
	var deleteAllPopup = element(by.className("cdk-overlay-pane"));
	browser.wait(EC.presenceOf(deleteAllPopup),10000);
	deleteAllPopup.getText().then(function(text) {
		console.log(text);
		
		//Clicking on 'Yes' button from 'DeleteAll locations' pop-up
		element(by.css("div[class='confirmation-dialog-actions mat-dialog-actions']")).element(by.css("button:nth-child(2)")).click();
				
		expect(element(by.cssContainingText("div[class='mat-paginator-range-actions'] div[class='mat-paginator-range-label']", "0 of 0")).isDisplayed()).toBe(true);
		browser.sleep(3000);
		
		deleteAll();
		browser.sleep(3000);
		
	})
				
});


})



