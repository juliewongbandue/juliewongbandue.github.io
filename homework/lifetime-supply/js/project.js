//Open lifetime-supply; write JS for the following:
//1. Store your current age into a variable
//2. Store a maximum age into a variable
//3. Store a favorite drink (from a drop-down) into a variable
//4. Store an amount per day into a variable
//5. Calculate how many you would eat total for the rest of your life
//6. Output your results to the user


document.getElementById('click-me').onclick = calculate;

function calculate (){
	var age = parseInt(document.getElementById('age').value);
	var maxAge = parseInt(document.getElementById('max-age').value);
	var favoriteDrink = document.getElementById('item').value;
	var numPerDay = parseInt(document.getElementById('num-per-day').value);
	
	var solution = (maxAge-age) * numPerDay * 365;

	document.getElementById('solution').innerHTML = solution
	document.getElementById('drink').innerHTML = favoriteDrink
	
}