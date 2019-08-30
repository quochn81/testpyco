let isNumber = (k) => {
	if(typeof k != "number"){
		return false;
	}
	return true;
	
}

let rotation = (matrix, k) => {

	let isNum = isNumber(k);
	// console.log(isNum);
	if(isNum){
		let total_rotation = k%4;
		if (total_rotation === 4 || total_rotation === 0 || total_rotation === -4) return matrix;
		let result = [];
		for(let i = 0; i < matrix[0].length; i++) {
			let row = matrix.map(e => e[i]).reverse();
			result.push(row);
		}
		return rotation(result, total_rotation-1);
	}
	return matrix;
}

// let  grid = [
// 		[0, 16,  255],
// 		[8, 128,  32],
// 		[0,   0,   0]	
// ]

// let result = rotation(grid, -4);
// console.log(result);

module.exports = rotation;