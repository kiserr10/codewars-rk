function towerBuilder(nFloors) {
	var tower = [];
	var spaces = nFloors;
	for (var i = 1; i <= nFloors; i++) {
		var block = "";
		block+=(" ".repeat(spaces-1));
		block+=("*".repeat(1+(i-1)*2));
		block+=(" ".repeat(spaces-1));
		tower.push(block);
		spaces--;
	}

	return tower;
}
console.log(towerBuilder(3));
console.log(towerBuilder(6));
