
// Json data for Current Bitcoin Price in USD
var btcReq = new XMLHttpRequest();
btcReq.open('GET', 'https://blockchain.info/ticker',true);
btcReq.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
	 price=data['USD']['last'];	// Price of Bitcoin in USD
	 price=price.toFixed(2); // Rounded to 2 decimals
	 document.getElementById('trate_dollar').value = price; // This sets the value of the hidden field trate

}
btcReq.send();


// Json data for Current Naira value
// This will be used to get Naira amount. Will be multipled to the amount entered by User.
var ngnReq = new XMLHttpRequest();
ngnReq.open('GET', 'https://openexchangerates.org/api/latest.json?app_id=820668a25b8b42078592e9c263bafa97',true);
ngnReq.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
	sell=data['rates']['NGN']-2; // This is the amount we will sell bitcoin
	buy=data['rates']['NGN']-15; // This is the amount we will buy bitcoin
	sell = sell.toFixed(2); 
	buy = buy.toFixed(2);
	document.getElementById('trate_naira_buy').value = sell; 
	document.getElementById('trate_naira_sell').value = buy;
	
	 // This sets the value of the hidden field in the sell form
	// This sets the value of the hidden field in the buy form
	

}
ngnReq.send();

// This segment removes the formmated naira amount before posting to datbase.
var fsub = document.getElementById('trans');
fsub.addEventListener('submit', noFormat)
function noFormat(){
    var usd =document.getElementById("usdc").value;
    var unFamt=  usd * sell; // unformatted amount to replace famt onsubmit
    var unFamt= unFamt.toFixed(2);
    document.getElementById("namt").value=unFamt; // 
}

// S
// var sform = document.getElementById('sellBtc'); // Get the form itself which is where we would add the onsubmit listener.
// sform.addEventListener('submit', noSalesFormat)
function noSalesFormat(){
    var susd =document.getElementById("sales_usdc").value;
    var salesusd=  susd * buy; // unformatted amount to replace famt onsubmit
    var salesusd= salesusd.toFixed(2);
    document.getElementById("sales_namt").value=salesusd; // 
}

// This segment converts the dollar value to Bitcoin Value
function usdConvert(){
 var usd = document.getElementById("usdc").value; // Get the value of Dollar input field
 if (isNaN(usd)) {
    document.getElementById("usdc").value =0; // Checks if the dollar input is not a number and sets the value to 0
 } else { // If the value entered is a number , it starts the calculation below
 var usdCalc = usd / price; // Gets the btc value by dividing the $ amount entered by the price of bitcoin.
 var usdCalc = usdCalc.toFixed(8); 
 document.getElementById("btcc").value = usdCalc; // Set the value of the bitcoin value got from the division above.
 var amt = usd*sell;
 var famt = accounting.formatNumber(amt); // formatted amount
 document.getElementById("namt").value = '₦'+ famt; // Set the value 


}
}



function salesUsdConvert(){
 var usd = document.getElementById("sales_usdc").value; // Get the value of Dollar input field
 if (isNaN(usd)) {
    document.getElementById("sales_usdc").value =0; // Checks if the dollar input is not a number and sets the value to 0
 } else { // If the value entered is a number , it starts the calculation below
 var usdCalc = usd / price; // Gets the btc value by dividing the $ amount entered by the price of bitcoin.
 var usdCalc = usdCalc.toFixed(8); 
 document.getElementById("sales_btcc").value = usdCalc; // Set the value of the bitcoin value got from the division above.
 var amt = usd*buy;
 var famt = accounting.formatNumber(amt); // formatted amount
 document.getElementById("sales_namt").value = '₦'+ famt; // Set the value 


}
}




// This segment converts the bitcoin value to dollar value
function btcConvert(){
 var btc = document.getElementById("btcc").value; // Gets the bitcoin value entered by User
 if (isNaN(btc)) {
    document.getElementById("btcc").value =0; // Checks that only numbers are entered , if not sets the value to 0
 } else { 
 var btcCalc = btc * price; // Create a variable that gets the bitcoin value entered and multiplies by Price of Bitcoin USD
 var btcCalc = btcCalc.toFixed(2);
 document.getElementById("usdc").value = btcCalc;
 // The naira input segment for sales
var amt = btcCalc * sell;
var famt = accounting.formatNumber(amt);
document.getElementById("namt").value = '₦'+famt;
 

}

}





function salesBtcConvert(){
 var btc = document.getElementById("sales_btcc").value; // Gets the bitcoin value entered by User
 if (isNaN(btc)) {
    document.getElementById("sales_btcc").value =0; // Checks that only numbers are entered , if not sets the value to 0
 } else { 
 var btcCalc = btc * price; // Create a variable that gets the bitcoin value entered and multiplies by Price of Bitcoin USD
 var btcCalc = btcCalc.toFixed(2);
 document.getElementById("sales_usdc").value = btcCalc;
 // The naira input segment for sales
var amt = btcCalc * buy;
var famt = accounting.formatNumber(amt);
document.getElementById("sales_namt").value = '₦'+famt;
 

}

}