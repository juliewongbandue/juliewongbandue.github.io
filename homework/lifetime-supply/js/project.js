//Open lifetime-supply; write JS for the following:
//1. Store your current age into a variable
//2. Store a maximum age into a variable
//3. Store a favorite drink (from a drop-down) into a variable
//4. Store an amount per day into a variable
//5. Calculate how many you would eat total for the rest of your life
//6. Output your results to the user


document.getElementById('click-me').onclick = calculate; //define the event
(onlick)

function calculate (){
	//get inputs (creating variables), make sure you remember to make sure
	//it's not a string by using "parseINT"
	var age = parseInt(document.getElementById('age').value);
	var maxAge = parseInt(document.getElementById('max-age').value);
	var favoriteDrink = document.getElementById('item').value;
	var numPerDay = parseInt(document.getElementById('num-per-day').value);
	
	
	console.log (age, maxAge, favDrink, numPerDay)
	//for debugging: if you want to know what type of data you're working with

	var solution = (maxAge-age) * numPerDay * 365;
	//MATH!!!!

	document.getElementById('solution').innerHTML = solution
	document.getElementById('drink').innerHTML = favoriteDrink
	//output: put the results in the HTML so sentences make sense.
}