function isNum(val){
	console.log(!isNaN(val));
	return (!isNaN(val));
}


function checkRadioChoice(checkedList, valList){
	for (let i = 0; i < checkedList.length; i++){
		if (checkedList[i]){
			return valList[i];
		}
	}
	return -1; 
}


function validateWelcomeInput(welcome){
	if (welcome == -1){
		printInvalid("welcomeOut", "");
		return false;
	} else {
		printPointsOutput("welcomeOut", "Welcome Offer", welcome);
		return true;
	}
}


function validateSpendInputs(rSpend, sSpend, fSpend, aSpend){
	let validity = true;
	let vals = [rSpend, sSpend, fSpend, aSpend];
	let names = ['Restaurants', 'U.S. Supermarkets', 'Flights', 'All other'];
	let ids = ['rOut', 'sOut', 'fOut', 'a_spendOut']


	for (let i = 0; i < vals.length; i++) {

		if ((isNum(vals[i]) == false) || (vals[i] == "")){
			printInvalid(ids[i], names[i]); 
			validity = false;	 
		} else if (parseFloat(vals[i]) < 0){
			printInvalid(ids[i], names[i]); 
			validity = false;
		} 
	}

	if (validity == true){
		totalSpend = parseFloat(rSpend) + parseFloat(sSpend) + parseFloat(fSpend) + parseFloat(aSpend)
		printPointsOutput("a_spendOut", "Spending Categories", totalSpend)
	}

	return validity;
}


function validateRedemptionInput(redemption){
	if (welcome == -1){
		printInvalid("redeemOut", "");
		return false;
	} else {
		return true;
	}
}


function printInvalid(id, name){
	document.getElementById(id).style.color = 'red';
	switch (id){
		case "welcomeOut":
			document.getElementById(id).innerHTML = "Please check yes or no for welcome offer.";
			break;
		case "rOut":
			document.getElementById(id).innerHTML = name + " spend amount is not valid. Please pick a number 0 or greater.";
			break;
		case "sOut":
			document.getElementById(id).innerHTML = name + " spend amount is not valid. Please pick a number 0 or greater.";
			break;
		case "fOut":
			document.getElementById(id).innerHTML = name + " spend amount is not valid. Please pick a number 0 or greater.";
			break;
		case "a_spendOut":
			document.getElementById(id).innerHTML = name + " spend amount is not valid. Please pick a number 0 or greater.";
			break;
		case "creditsOut":
			document.getElementById(id).innerHTML = name + " credit amount is not valid. Please pick a number 0 or greater.";
			break;
		case "redeemOut":
			document.getElementById(id).innerHTML = "Please check one of the redemption choices.";
			break;
	}
}
	

function printPointsOutput(id, name, amt){
	document.getElementById(id).style.color = 'blue';
	switch (id){
		case "welcomeOut":
			document.getElementById(id).innerHTML = "Points earned from " + name +": " + amt;
			break;
		case "a_spendOut":
			document.getElementById(id).innerHTML = "Points earned from " + name +": " + amt;
			break;
		case "creditsOut":
			document.getElementById(id).innerHTML = "Value of credits in year 1 (w/ double dipping): " + amt;
			break;
		case "redeemOut":
			document.getElementById(id).innerHTML = "Value of Points: (Year 1 = Bonus + Spend)" + amt;
			break;
	}
}


function mainFunction() {
	let welcomeChecks = [document.getElementById("yes").checked, 
						 document.getElementById("no").checked];
	let welcomeVals = [35000, 0]; 
	let welcome = checkRadioChoice(welcomeChecks, welcomeVals);


	let rSpend = document.getElementById("rSpend").value;
	let sSpend = document.getElementById("sSpend").value;
	let fSpend = document.getElementById("fSpend").value;
	let aSpend = document.getElementById("aSpend").value;


	let redemptionChecks = [document.getElementById("statement").checked,
							document.getElementById("amazon").checked,
							document.getElementById("gift").checked,
							document.getElementById("schwab").checked,
							document.getElementById("transfer").checked
							];
    let redemptionVals = [0.006, 0.007, 0.01, 0.0125, 0.02];
    let redemption = checkRadioChoice(redemptionChecks, redemptionVals);


	let aCredit = document.getElementById("aCredit").value;
	let dCredit = document.getElementById("dCredit").value;
	let oCredit = document.getElementById("oCredit").value;
	

	let validWelcome = validateWelcomeInput(welcome);
	let validSpend = validateSpendInputs(rSpend, sSpend, fSpend, aSpend);
	let validRedemption = validateRedemptionInput(redemption);
	let validCredit = validateCreditInputs(redemption);


	if (validWelcome && validSpend && validRedemption && validCredit){

	}
	
    /*
	console.log("successful fillout"); 
	let beforeAnnualFee = ((welcome + (rSpend * 4) + (sSpend * 4) + (fSpend * 3) + (aSpend * 1)) * redemption) + ((aCredit*2) + (dCredit*1) + (oCredit*1));
	let totalValYear1 = beforeAnnualFee - 250;
	let totalValYear2 = beforeAnnualFee - ((welcome*redemption) + 250) - aCredit;
	console.log(totalValYear1);
	console.log(totalValYear2); */
}

