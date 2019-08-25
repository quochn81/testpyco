
var text_word = "accompany=đồng hành, đi cùng, hộ tống;acknowledge=thừa nhận, chấp nhận sự thật của cái gì\nbeautiful=xinh đẹp;breathing=sự/nhịp thở";

var arr_word = [
	[
		{key: 'accompany', value: 'đồng hành, đi cùng, hộ tống'}, 
		{key: 'acknowledge', value: 'thừa nhận, chấp nhận sự thật của cái gì'}
	],
	[
		{key: 'beautiful', value: 'xinh đẹp'}, 
		{key: 'breathing', value: 'sự/nhịp thở'}
	]
];

let store = (arr_wrd) => {
	let text_result = joinWords(arr_wrd);	
}

let load = (text) => {
	let arr_word = paserTxt(text);
}

let joinWords = (arr_wrd) => {
	let str_text = "";
	const promises = [];
	arr_word.map(obj =>{
		// let tmp = joinWords1(obj);
		promises.push(joinWords1(obj));
	});
	// console.log(promises);

	Promise.all(promises)
	.then(data => {
		console.log(data.join("\n"));
		return data;
	});
	
}

let joinWords1 = (arr_wrd) => {
	return new Promise((resolve, reject) =>{
		setTimeout(() => {
			let text = "";
			arr_wrd.map((word) => {
				text = text + word.key + "=" + word.value + ";";
			});
			text = text.substring(0, text.length-1);
			// cb(text);
			resolve(text);
		}, 1000)
	});
}

let paserTxt = (text) => {
	let arr_wrd = [];
	let tmp = text.split("\n");
	const promises = [];
	tmp.map((item) => {
		promises.push(paserTxt1(item));
	});

	Promise.all(promises)
	.then(data => {
		console.log(data);
		return data;
	});
}

let paserTxt1 = (txt) => {
	return new Promise((resolve, reject) =>{
		setTimeout(() => {
			let tmp = txt.split(";");
			let arr_wrd = [];
			tmp.map((item) => {
				let tmp3 = item.split("=");
				let obj = {
					key: tmp3[0],
					value: tmp3[1]
				};
				arr_wrd.push(obj);
			});
			// cb(text);
			resolve(arr_wrd);
		}, 1000)
	});
}



let test = store(arr_word);
let arr = load(text_word);