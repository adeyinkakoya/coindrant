
// Get the current bitcoin price from blockchain.info website.
var btcReq = new XMLHttpRequest();
btcReq.open('GET', 'https://blockchain.info/ticker',true);
btcReq.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
	 price=data['USD']['last'];	// Price of Bitcoin in USD
	 price=price.toFixed(2); // Rounded to 2 decimals
	 document.getElementById('trate_dollar').value = price; // This sets the value of the hidden field trate_dollar in the buy.php form
}
btcReq.send();

// Get the current naira rate for the parallel market
var ngnReq = new XMLHttpRequest();
ngnReq.open('GET', 'https://openexchangerates.org/api/latest.json?app_id=820668a25b8b42078592e9c263bafa97',true);
ngnReq.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
	buy=data['rates']['NGN']; // This is the amount the user will buy bitcoin from us in Naira
	buy=buy.toFixed(2);
	document.getElementById('trate_naira_buy').value = buy; // This sets the value of the hidden field trate_naira_buy
}
ngnReq.send();

// This segment removes the formmated naira amount when form is submitted,before posting to the database.
var fsub = document.getElementById('trans');
fsub.addEventListener('submit', noFormat)
function noFormat(){
    var usd =document.getElementById("usdc").value;
    var unFamt=  usd * buy; // The USD value multiplied by the naira amount the user is buying.
    var unFamt= unFamt.toFixed(2);
    document.getElementById("namt").value=unFamt; // 
}

// Converts the USD value to Bitcoin based on User input
function usdConvert(){
 var usd = document.getElementById("usdc").value; // Get the value of Dollar input field
 if (isNaN(usd)) {
    document.getElementById("usdc").value =0; // Checks if the dollar input is not a number and sets the value to 0
 } else { // If the value entered is a number , it starts the calculation below
 var usdCalc = usd / price; // Gets the btc value by dividing the $ amount entered by the price of bitcoin.
 var usdCalc = usdCalc.toFixed(8); 
 document.getElementById("btcc").value = usdCalc; // Set the value of the bitcoin value got from the division above.
 // Set the amount of USD to naira using the rate the user is buying.
 var amt = usd*buy;
 var famt = accounting.formatNumber(amt); // formatted amount
 document.getElementById("namt").value = '₦'+ famt; // Set the value 
}
}

// Vice Versa. If User sets BTC value to buy. Get the equivalent to USD field.
function btcConvert(){
 var btc = document.getElementById("btcc").value; // Gets the bitcoin value entered by User
 if (isNaN(btc)) {
    document.getElementById("btcc").value =0; // Checks that only numbers are entered , if not sets the value to 0
 } else { 
 var btcCalc = btc * price; // Create a variable that gets the bitcoin value entered and multiplies by Price of Bitcoin USD
 var btcCalc = btcCalc.toFixed(2);
 document.getElementById("usdc").value = btcCalc;
 // The naira input segment for sales
var amt = btcCalc * buy;
var famt = accounting.formatNumber(amt);
document.getElementById("namt").value = '₦'+famt;
}
}