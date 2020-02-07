function upload() 
{
	this.storeLocations=element(by.id('menu_StoreLocations'));
	this.uploadButton=element(by.id('btn_ImportStores'));
	this.browse=element(by.css('input[type="file"]'));
	this.importButton=element(by.className("mat-raised-button mat-primary"));
	this.toastMessage=element(by.css("div[class='snack-bar-text']"));
	
};

//to use the objects in different javascript file
module.exports=new upload();
