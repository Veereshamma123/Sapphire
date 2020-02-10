function addEdit() 
{
	//Add store location
	this.storeLocations=element(by.id('menu_StoreLocations'));
	this.addButton=element(by.id('btn_CreateStore'));
	this.storeId=element(by.id("txtStoreID"));
	this.address=element(by.id("txtAddress1"));
	this.city=element(by.id("txtCity"));
	this.state=element(by.id("txtState"));
	this.zip=element(by.id("txtZip"));
	this.save=element(by.id("btn_Save"))
	this.toastMessage=element(by.css("div[class='snack-bar-text']"));
	
	//Edit store location
	this.back=element(by.css("button[class='back-button']"));
	this.filter=element(by.id('txt_Filter'));
	this.reload=element(by.css("button[mattooltip='Reload']"));
	this.rows=element(by.css("tbody tr"));
	this.allRows=element.all(by.css("tbody tr"));
	//this.edit=element(by.css("td:nth-child(8) mat-icon:nth-child(1)"));
	this.editIcon=element(by.css("mat-icon[aria-label='Edit Store Location']"));
	this.editCity=element(by.css("td[class='col-city mat-cell cdk-column-city mat-column-city ng-star-inserted'] input"));
	this.editSave=element(by.css("mat-icon[aria-label='Save Edit']"));
	this.toast=element(by.cssContainingText("div[class='snack-bar-text']", "Store location saved."));
	
};

//To use the objects in different javascript file
module.exports=new addEdit();
