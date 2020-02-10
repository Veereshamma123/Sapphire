function deleteAllLocations() 
{
	//Delete all locations
	this.locations=element(by.id('menu_Locations'));
	this.deleteAllButton=element(by.id('btn_ClearAll'));
	this.popup=element(by.className("cdk-overlay-pane"));
	this.yesButton=element(by.css("div[class='confirmation-dialog-actions mat-dialog-actions']")).element(by.css("button:nth-child(2)"));
	this.recordsCount=element(by.cssContainingText("div[class='mat-paginator-range-actions'] div[class='mat-paginator-range-label']", "0 of 0"));
	
};

//To use the objects in different javascript file
module.exports=new deleteAllLocations();
