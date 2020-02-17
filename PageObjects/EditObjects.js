function edit() 
{
	//Edit store location
	this.back=element(by.css("button[class='back-button']"));
	this.filter=element(by.id('txt_Filter'));
	this.reload=element(by.css("button[mattooltip='Reload']"));
	this.rows=element(by.css("tbody tr"));
	this.allRows=element.all(by.css("tbody tr"));
	//this.edit=element(by.css("td:nth-child(8) mat-icon:nth-child(1)"));
	this.editIcon=element(by.css("mat-icon[aria-label='Edit Store Location']"));
	this.editCity=element(by.css("td[class='col-city mat-cell cdk-column-city mat-column-city ng-star-inserted'] input")); //css("tbody tr td:nth-child(5)")); 
	this.editSave=element(by.css("mat-icon[aria-label='Save Edit']"));
	this.toast=element(by.cssContainingText("div[class='snack-bar-text']", "Store location saved."));
	
};

//To use the objects in different javascript file
module.exports=new edit();
