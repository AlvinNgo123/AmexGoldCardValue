
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

function checkRadioChoice(checkedList, valList){
	for (let i = 0; i < checkedList.length; i++){
		if (checkedList[i]){
			return valList[i];
		}
	}
	return -1; 
}


function mainFunction() {
	let rSpend = document.getElementById("rSpend").value;
	let sSpend = document.getElementById("sSpend").value;
	let fSpend = document.getElementById("fSpend").value;
	let aSpend = document.getElementById("aSpend").value;

	let aCredit = document.getElementById("aCredit").value;
	let dCredit = document.getElementById("dCredit").value;
	let oCredit = document.getElementById("oCredit").value;

	let welcomeChecks = [document.getElementById("yes").checked, document.getElementById("no").checked];
	let welcomeVals = [35000, 0]; 
	let welcome = checkRadioChoice(welcomeChecks, welcomeVals);
	/*console.log(welcome);
	if (welcome == -1){
		console.log("Please check one of the choices");
	}*/


	let redemption = 0;



	/*if (isSpendValid(rSpend, sSpend, fSpend, aSpend, aCredit, dCredit, oCredit) == false){
		console.log("Needs Fixing"); 
		return; 
	}*/



}

