check_room = (arr1, arr2, n) => {
	let total_room = n;
	let arrivals = arr2[Symbol.iterator]();
	let val = arrivals.next().value;
	// console.log(val);
	for (let i = 0; i < arr1.length; i++) {
		while(val <= arr1[i]){
			total_room -= 1;
			val = arrivals.next().value;
            if (total_room < 0) return false;
		}
		total_room += 1;
	}
	return true;
}

module.exports = check_room;
