let arrObjects = [];
 
arrObjects	[0] = {
    id: "1",
    name: "firstArrElement",
	poz:"1",
my:function (){
	alert("lol");
}
};
arrObjects	[1] = {
    id: "2",
    name: "secondArrElement",
myc:function (){
	alert("bu-ga-ga-ga-ga");
}
};

let po=(arrObjects)=>{
	let b=Object.keys(arrObjects[0]).length;
	let a=Object.keys(arrObjects[1]).length;
	if (b>a) { arrObjects[1].myc(); return arrObjects[0];}
	else {arrObjects[0].my(); return arrObjects[1];}
}