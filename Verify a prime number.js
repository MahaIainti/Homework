function a (x) {
	if (x == 2 || x == 3 || x == 5 || x == 7 ) {
    	console.log(x)
	} else if (x ==1 || x % 2 === 0 ||  x % 3 === 0 || x % 5 === 0 || x % 7 === 0){
    	console.log("Not prime")
	} else {
    	console.log(x)
	}
}

a(101)