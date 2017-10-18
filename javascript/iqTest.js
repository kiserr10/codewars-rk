function iqTest(numbers){
	const even = [], odd = [];
	numbers = numbers.split(' ').map( x => { return parseInt(x);
	});
	numbers.map(function(x){
		if(x % 2 == 0)
			even.push(numbers.indexOf(x) + 1);
		else
			odd.push(numbers.indexOf(x) + 1);
	});
	return even.length > odd.length ? odd[0] : even[0];
}
