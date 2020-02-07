describe('Upload', function() {
	
var d=require("./../Data/UploadData.js");
var obj=require("./../PageObjects/UploadObjects.js");
//var using=require('jasmine-data-provider'); // For using data driven testing
var path = require('path');
var EC = protractor.ExpectedConditions;

it('Upload store locations', function() {
		
	obj.storeLocations.click(); //Clicking on 'Store locations' button
	browser.sleep(3000);
	
	obj.uploadButton.click(); //Clicking on 'Upload' button
	browser.sleep(3000);
	
	//var fileToUpload = 'D:/Backup/softwares/Store.csv',
    absolutePath = path.resolve(d.UploadData.fileToUpload);

    var remote = require('C:\\Users\\anupama.gajjala\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\remote');
    browser.setFileDetector(new remote.FileDetector());

    obj.browse.sendKeys(absolutePath);   //Clicking on 'Browse' area
	browser.sleep(3000);
	obj.importButton.click(); //Clicking on Import button
	
	browser.wait(EC.presenceOf(obj.toastMessage),10000);
	
	obj.toastMessage.getText().then(function(text)
	{
		
		if(text==d.UploadData.message)
		{
			console.log("File Uploaded successfully");
		}
		else
		{
			console.log("File not uploaded");
		}
	})
		
	expect(obj.toastMessage.getText()).toBe(d.UploadData.message);
	browser.sleep(3000);
});

})