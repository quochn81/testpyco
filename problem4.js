check_room = (arr1, arr2, n) => {
	let total_room = n;
	let arrivals = arr2[Symbol.iterator]();
	let val = arrivals.next().value;
	// console.log(val);
	for (let i = 0; i < arr1.length; i++) {
		// console.log("arr1[i]: " + arr1[i]);
		while(val <= arr1[i]){
			total_room -= 1;
			val = arrivals.next().value;
			// console.log("val in while next: " + val);
			// console.log("arr1[i] in while: " + arr1[i]);
			// console.log("total_room: " + total_room);

            if (total_room < 0) return false;
		}
		total_room += 1;
	}
	return true;
}

// // arrivals = [1, 3, 5];
// // departures = [2, 6, 10];
// let arrivals2 = [2, 5, 8, 10];
// let departures2 = [4, 10, 12, 14];

// let test = check_room(departures2, arrivals2, 3);
// console.log(test);

module.exports = check_room;