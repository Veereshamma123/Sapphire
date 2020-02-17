/*function randomStore()
{ 
	var min=2010; 
	var max=2012;  
	this.storeValue = Math.floor(Math.random() * (+max - +min)) + +min; 
};

//To use the objects in different javascript file
module.exports=new randomStore();*/


/*var generate_uuid = (function() {
var s4 =function() {
return Math.floor((1 + Math.random()) * 0x10000)
.toString(16);
.substring(1);
};

return function(){
return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};
})();
console.log(generate_uuid());*/


//for uuid
function generate_uuid()
{
	var uuid = require('uuid');
	this.id=uuid();
	//console.log(uuid());
}

module.exports=new generate_uuid();



