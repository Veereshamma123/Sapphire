function add() 
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
	
};

//To use the objects in different javascript file
module.exports=new add();
