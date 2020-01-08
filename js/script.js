
function isNum(val){
	console.log(!isNaN(val));
	return (!isNaN(val));
}

function isSpendValid(r, s, f, a, ac, dc, oc) {
	let numErr = 0;
	let vals = [r, s, f, a, ac, dc, oc];
	let names = ['rSpend', 'sSpend', 'fSpend', 'aSpend', 'aCredit', 'dCredit', 'oCredit'];

	for (let i = 0; i < vals.length; i++) { 
    	if (isNum(vals[i]) && (vals[i] >= 0)){
			continue;
		} else { 
			console.log(names[i] + ' is not valid.');
			numErr = numErr + 1;
		}
	}

	if (numErr > 0) { 
		return false;
	} else {
		return true;
	}
}


function mainFunction() {
	let rSpend = document.getElementById("rSpend").value;
	let sSpend = document.getElementById("sSpend").value;
	let fSpend = document.getElementById("fSpend").value;
	let aSpend = document.getElementById("aSpend").value;

	let aCredit = document.getElementById("aCredit").value;
	let dCredit = document.getElementById("dCredit").value;
	let oCredit = document.getElementById("oCredit").value;

	if (isSpendValid(rSpend, sSpend, fSpend, aSpend, aCredit, dCredit, oCredit) == false){
		console.log("Needs Fixing"); 
		return; 
	} 



}

