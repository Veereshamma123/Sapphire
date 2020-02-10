function deleteStore() 
{
	//Delete store location
	this.storeLocations=element(by.id('menu_StoreLocations'));
	this.filter=element(by.id('txt_Filter'));
	this.reload=element(by.css("button[mattooltip='Reload']"));
	this.rows=element(by.css("tbody tr"));
	this.allRows=element.all(by.css("tbody tr"));
	//this.secondColumn=element(by.css("td:nth-child(2)"));
	this.popup=element(by.className("cdk-overlay-pane"));
	this.yesButton=element(by.css("div[class='confirmation-dialog-actions mat-dialog-actions']")).element(by.css("button:nth-child(2)"));	
	this.toastMessage=element(by.cssContainingText("div[class='snack-bar-text']", "Location deleted."));
	
};

//To use the objects in different javascript file
module.exports=new deleteStore();
