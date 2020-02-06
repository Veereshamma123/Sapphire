var path = require('path');
var EC = protractor.ExpectedConditions;

it('Upload store locations', function() {
		
	element(by.id('menu_StoreLocations')).click(); //Clicking on 'Store locations' button
	browser.sleep(3000);
	
	element(by.id('btn_ImportStores')).click(); //Clicking on 'Upload' button
	browser.sleep(3000);
	
	var fileToUpload = 'D:/Store.csv',
    absolutePath = path.resolve(fileToUpload);

    var remote = require('C:\\Users\\anupama.gajjala\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\remote');
    browser.setFileDetector(new remote.FileDetector());

    
	element(by.css('input[type="file"]')).sendKeys(absolutePath);   //Clicking on 'Browse' area
	browser.sleep(3000);
	element(by.className("mat-raised-button mat-primary")).click(); //Clicking on Import button
	
	browser.wait(EC.presenceOf(element(by.css("div[class='snack-bar-text']"))),10000);
	
	element(by.css("div[class='snack-bar-text']")).getText().then(function(text)
	{
		
		if(text=="Upload Successful!")
		{
			console.log("File Uploaded successfully");
		}
		else
		{
			console.log("File not uploaded");
		}
	})
		
	expect(element(by.css("div[class='snack-bar-text']")).isDisplayed()).toBe(true);
	browser.sleep(3000);
});