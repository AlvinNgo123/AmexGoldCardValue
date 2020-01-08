
function isNum(val){
	console.log(!isNaN(val));
	return (!isNaN(val));
}

function isSpendValid(r, s, f, a) {
	let numErr = 0;
	let vals = [r, s, f, a];
	let names = ['rSpend', 'sSpend', 'fSpend', 'aSpend'];

	for (let i = 0; i < 4; i++) { 
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


function myFunction() {
	let rSpend = document.getElementById("rSpend").value;
	let sSpend = document.getElementById("sSpend").value;
	let fSpend = document.getElementById("fSpend").value;
	let aSpend = document.getElementById("aSpend").value;

	isSpendValid(rSpend, sSpend, fSpend, aSpend);


	/*if (isSpendValid(rSpend, sSpend, fSpend, aSpend) == false){
		console.log("Needs Fixing");
		return; 
	} */
}

