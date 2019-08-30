let check_room = require('../problem4');

let arrivals1 = [1, 3, 5];
let departures1 = [2, 6, 10];

let arrivals2 = [2, 5, 8, 10];
let departures2 = [4, 10, 12, 14];


test('Test case 1 no room at day=5 have two person, but have one room', () => {
	expect(check_room(departures1, arrivals1, 1)).toBe(false);
});
test('Test case 2 no room day=10 have three person, but have two room', () => {
	expect(check_room(departures2, arrivals2, 2)).toBe(false);
});

test('Test case 3 have room at day=5 have two person, but have more than two room', () => {
	expect(check_room(departures1, arrivals1, 2)).toBe(true);
});
test('Test case 4 have room day=10 have three person, but have more than three room', () => {
	expect(check_room(departures2, arrivals2, 3)).toBe(true);
});