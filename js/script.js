function isNum(val){
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
		printInvalid("wOut", "");
		return false;
	} else {
		printPointsOutput("welcomeOut", "Welcome Offer", welcome);
		removeInvalid("wOut", "");
		return true;
	}
}


function validateSpendInputs(rSpend, sSpend, fSpend, aSpend){
	let validity = true;
	let vals = [rSpend, sSpend, fSpend, aSpend];
	let names = ['Restaurants', 'U.S. Supermarkets', 'Flights', 'All other'];
	let ids = ['rOut', 'sOut', 'fOut', 'aOut'];


	for (let i = 0; i < vals.length; i++) {

		if ((isNum(vals[i]) == false) || (vals[i] == "")){
			printInvalid(ids[i], names[i]); 
			validity = false;	 
		} else if (parseFloat(vals[i]) < 0){
			printInvalid(ids[i], names[i]); 
			validity = false;
		} else {
			removeInvalid(ids[i]);
		}
	}

	if (validity == true){
		totalSpend = parseFloat(rSpend) + parseFloat(sSpend) + parseFloat(fSpend) + parseFloat(aSpend)
		printPointsOutput("spendOut", "Spending Categories", totalSpend)
	}

	return validity;
}


function validateCreditInputs(aCredit, dCredit, oCredit){
	let validity = true;
	let vals = [aCredit, dCredit, oCredit];
	let names = ['Airline', 'Dining', 'Other Benefits'];
	let ids = ['aCredsOut', 'dCredsOut', 'oCredsOut'];


	for (let i = 0; i < vals.length; i++) {

		if ((isNum(vals[i]) == false) || (vals[i] == "")){
			printInvalid(ids[i], names[i]); 
			validity = false;	 
		} else if (parseFloat(vals[i]) < 0){
			printInvalid(ids[i], names[i]); 
			validity = false;
		} else {
			removeInvalid(ids[i]);
		}
	}

	if (validity == true){
		totalCredits1 = (parseFloat(aCredit) * 2) + parseFloat(dCredit) + parseFloat(oCredit);
		totalCredits2 = parseFloat(aCredit) + parseFloat(dCredit) + parseFloat(oCredit);
		printPointsOutput("creditsOut", "", totalCredits1);
		printPointsOutput("creditsOut2", "", totalCredits2);
	}

	return validity;
}


function validateRedemptionInput(redemption){
	if (redemption == -1){
		printInvalid("redOut", "");
		return false;
	} else {
		removeInvalid("redOut");
		return true; 
	}
}

function removeInvalid(id){
	document.getElementById(id).innerHTML = " ";
}

function printInvalid(id, name){
	document.getElementById(id).style.color = "#DC143C";
	switch (id){
		case "wOut":
			document.getElementById(id).innerHTML = "*** Please check yes or no for welcome offer.";
			break;
		case "rOut":
			document.getElementById(id).innerHTML = "*** " + name + " spend amount is not valid. Please pick a number 0 or greater.";
			break;
		case "sOut":
			document.getElementById(id).innerHTML = "*** " + name + " spend amount is not valid. Please pick a number 0 or greater.";
			break;
		case "fOut":
			document.getElementById(id).innerHTML = "*** " + name + " spend amount is not valid. Please pick a number 0 or greater.";
			break;
		case "aOut":
			document.getElementById(id).innerHTML = "*** " + name + " spend amount is not valid. Please pick a number 0 or greater.";
			break;
		case "aCredsOut":
			document.getElementById(id).innerHTML = "*** " + name + " credit amount is not valid. Please pick a number 0 or greater.";
			break;
		case "dCredsOut":
			document.getElementById(id).innerHTML = "*** " + name + " credit amount is not valid. Please pick a number 0 or greater.";
			break;
		case "oCredsOut":
			document.getElementById(id).innerHTML = "*** " + name + " credit amount is not valid. Please pick a number 0 or greater.";
			break;
		case "redOut":
			document.getElementById(id).innerHTML = "*** Please check one of the redemption choices.";
			break;
		case "invalidUser":
			document.getElementById(id).innerHTML = "*** Some inputs are invalid. Please go back and fix the fields marked in red.";
			break;
	}
}
	

function printPointsOutput(id, name, amt){
	document.getElementById(id).style.color = "#4682B4";
	switch (id){
		case "welcomeOut":
			document.getElementById(id).innerHTML = "Points earned from " + name +": " + amt;
			break;
		case "spendOut":
			document.getElementById(id).innerHTML = "Points earned from " + name +": " + amt;
			break;
		case "creditsOut":
			document.getElementById(id).innerHTML = "Value of credits in year 1 (w/ double dipping in Airline Credits): $" + amt;
			break;
		case "creditsOut2":
			document.getElementById(id).innerHTML = "Value of credits in year 2 (w/ no Airline Credits): $" + amt;
			break;
		case "redeemOut":
			document.getElementById(id).innerHTML = "Expected Value in Year 1: $" + amt;
			break;
		case "redeemOut2":
			document.getElementById(id).innerHTML = "Expected Value in Year 2: $" + amt;
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
	let validCredit = validateCreditInputs(aCredit, dCredit, oCredit);
	let validRedemption = validateRedemptionInput(redemption);


	if (validWelcome && validSpend && validRedemption && validCredit){
		console.log("All spend is valid");
		//Sums up spending categories and welcome bonuses (adjusted with redemption) and credits (airline credit double dipping accounted for)
		let beforeAnnualFee1 = ((welcome + (rSpend * 4) + (sSpend * 4) + (fSpend * 3) + (aSpend * 1)) * redemption) + ((aCredit*2) + (dCredit*1) + (oCredit*1));
		//Subtracts the annual fee that must be paid to get total value in first year
		let totalValYear1 = beforeAnnualFee1 - 250;

		//Second year of the card, we don't have a signup bonus and no airline credit since we had chance to double dip.
		let beforeAnnualFee2 = (((rSpend * 4) + (sSpend * 4) + (fSpend * 3) + (aSpend * 1)) * redemption) + ((aCredit*1) + (dCredit*1) + (oCredit*1));
		let totalValYear2 = beforeAnnualFee2 - 250;
		

		totalValYear1 = totalValYear1.toFixed(2);
		totalValYear2 = totalValYear2.toFixed(2);
		printPointsOutput("redeemOut", "", totalValYear1);
		printPointsOutput("redeemOut2", "", totalValYear2);
		removeInvalid("invalidUser");
	} else {
		printInvalid("invalidUser", "");
	}
	
}

