
function isNum(val){
	console.log(!isNaN(val));
	return (!isNaN(val));
}

function isSpendValid(r, s, f, a, ac, dc, oc) {
	let numErr = 0;
	let vals = [r, s, f, a, ac, dc, oc];
	let names = ['rSpend', 'sSpend', 'fSpend', 'aSpend', 'aCredit', 'dCredit', 'oCredit'];

	for (let i = 0; i < vals.length; i++) { 
    	if ((vals[i] != "") && isNum(vals[i]) && (vals[i] >= 0)){
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

	let welcomeChecks = [document.getElementById("yes").checked, 
						 document.getElementById("no").checked];
	let welcomeVals = [35000, 0]; 
	let welcome = checkRadioChoice(welcomeChecks, welcomeVals);
	
	let redemptionChecks = [document.getElementById("statement").checked,
							document.getElementById("amazon").checked,
							document.getElementById("gift").checked,
							document.getElementById("schwab").checked,
							document.getElementById("transfer").checked
							];
    let redemptionVals = [0.006, 0.007, 0.01, 0.0125, 0.02];
    let redemption = checkRadioChoice(redemptionChecks, redemptionVals);

    //This is to check that all user inputs are valid and form is completely filled out.
	errorFree = true;
	if (isSpendValid(rSpend, sSpend, fSpend, aSpend, aCredit, dCredit, oCredit) == false){
		errorFree = false; 
	}
	if (welcome == -1){
		console.log("Please check yes or no for welcome offer");
		errorFree = false;
	}
	if (redemption == -1){
		console.log("Please check one of the redemption choices");
		errorFree = false;
	}
	if (errorFree == false){
		return;
	}

	console.log("successful fillout"); 
	let test = welcome + (rSpend * 4) + (sSpend * 4) + (fSpend * 3) + (aSpend * 1);
	let test1 = test * redemption;
	let test2 = test1 + aCredit + dCredit + oCredit;
	let beforeAnnualFee = ((welcome + (rSpend * 4) + (sSpend * 4) + (fSpend * 3) + (aSpend * 1)) * redemption) + ((aCredit*1) + (dCredit*1) + (oCredit*1));
	let totalValYear1 = beforeAnnualFee - 250;
	let totalValYear2 = beforeAnnualFee - ((welcome*redemption) + 250);
	console.log(aCredit);
	console.log(dCredit);
	console.log(oCredit);
	console.log("temp: " + test1);
	console.log("after: " + (test1 + aCredit));
	console.log(totalValYear1);
	console.log(totalValYear2); 
}

