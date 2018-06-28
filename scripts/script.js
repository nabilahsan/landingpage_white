//Animate scroll up.
//Idiot proofing
var myVar = setInterval(myTimer, 6500);

function myTimer(){
	var element = document.getElementById("defn");
	element.scrollIntoView({behavior: "smooth", block: "end"});
}