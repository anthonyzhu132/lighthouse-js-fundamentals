function howManyHundreds(num) {
	var x = num;
	var y = num % 100;
	var z = x - y;
	return z / 100;
}

console.log(howManyHundreds(1000), "=?", 10);