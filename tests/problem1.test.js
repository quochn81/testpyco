// var expect  = require('chai').expect;

let rotation = require('../problem1');

let matrix = [
        [0,  16, 255],
        [8, 128,  32],
        [0,   0,   0]
    ];

test('Test Case number (k) is string', () => {
    expect(rotation(matrix, "1")).toEqual(
        [ 
            [0,  16, 255],
	        [8, 128,  32],
	        [0,   0,   0] 
        ]
    );
});

test('Test Case number (k) is 0, turn clockwise', () => {
    expect(rotation(matrix, 0)).toEqual(
        [ 
            [0,  16, 255],
            [8, 128,  32],
            [0,   0,   0]  
        ]
    );
});

test('Test Case number (k%4) is 1, turn clockwise', () => {
    expect(rotation(matrix, 1)).toEqual(
        [ 
            [ 0,   8,   0 ], 
            [ 0, 128,  16 ], 
            [ 0,  32, 255 ]  
        ]
    );
});

test('Test Case number (k%4) is 2, turn clockwise', () => {
    expect(rotation(matrix, 2)).toEqual(
        [ 
            [   0,   0,  0 ], 
            [  32, 128, 8 ], 
            [ 255, 16, 0 ]  
        ]
    );
});

test('Test Case number (k%4) is 3, turn clockwise', () => {
    expect(rotation(matrix, 3)).toEqual(
        [ 
            [ 255,  32, 0 ], 
            [  16, 128, 0 ], 
            [   0,   8, 0 ]  
        ]
    );
});

test('Test Case number (k%4) is 0, turn clockwise', () => {
    expect(rotation(matrix, 4)).toEqual(
        [ 
            [0,  16, 255],
            [8, 128,  32],
            [0,   0,   0]  
        ]
    );
});

test('Test Case number (k%4) is -1, anticlockwise', () => {
    expect(rotation(matrix, -1)).toEqual(
        [ 
            [ 255,  32, 0 ], 
            [  16, 128, 0 ], 
            [   0,   8, 0 ]  
        ]
    );
});

test('Test Case number (k%4) is -2, anticlockwise', () => {
    expect(rotation(matrix, -2)).toEqual(
        [ 
            [   0,   0, 0 ], 
            [  32, 128, 8 ], 
            [ 255,  16, 0 ]  
        ]
    );
});

test('Test Case number (k%4) is -3, anticlockwise', () => {
    expect(rotation(matrix, -3)).toEqual(
        [ 
            [ 0,   8,   0 ], 
            [ 0, 128,  16 ], 
            [ 0,  32, 255 ]
        ]
    );
});

test('Test Case number (k%4) is 0, anticlockwise', () => {
    expect(rotation(matrix, -4)).toEqual(
        [ 
            [0,  16, 255],
            [8, 128,  32],
            [0,   0,   0]  
        ]
    );
});

// describe('Run test case', function() {
//     describe ('Run test for problem 1', function() {
//     	it('Case number is string', function(done){
//             expect(rotation(matrix, 1)).to.equal(false);
//             done();
//         });

//         it('Case number is string compare with result k = 1', function(done){
//             expect(rotation(matrix, 1)).to.equal(true);
//             done();
//         });

//         it('Case 1: turn clockwise k%4 == 1', function(done){
//             expect(rotation(matrix, 1)).to.equal([ 
	            // [ 0,   8,   0 ], 
	            // [ 0, 128,  16 ], 
	            // [ 0,  32, 255 ] 
// 	        ]);
//             done();
//         });

//         it('Case 2: turn clockwise k%4 == 2', function(done) {
//             expect(rotation(matrix, 2)).to.equal([ 
		            // [   0,   0,  0 ], 
		            // [  32, 128, 8 ], 
		            // [ 255, 16, 0 ] 
// 	        ]);
//             done();
//         });

//         it('Case 3: turn clockwise k%4 == 3', function(done){
//             expect(rotation(matrix, 3)).to.equal([ 
		            // [ 255,  32, 0 ], 
		            // [  16, 128, 0 ], 
		            // [   0,   8, 0 ] 
// 	        ]);
//             done();
//         });

//         it('Case 4: turn clockwise k%4 == 4', function(done) {
//             expect(rotation(matrix, 4)).to.equal([ 
// 	            [0,  16, 255],
// 		        [8, 128,  32],
// 		        [0,   0,   0]
// 	        ]);
//             done();
//         });

//         it('Case 5: anticlockwise k%4 == -1', function(done){
//             expect(rotation(matrix, -1)).to.equal([ 
// 		            [ 255,  32, 0 ], 
// 		            [  16, 128, 0 ], 
// 		            [   0,   8, 0 ] 
// 	        ]);
//             done();
//         });

//         it('Case 6: anticlockwise k%4 == -2', function(done) {
//             expect(rotation(matrix, -2)).to.equal([ 
// 		            [   0,   0,  0 ], 
// 		            [  32, 128, 8 ], 
// 		            [ 255, 16, 0 ] 
// 	        ]);
//             done();
//         });

//         it('Case 7: anticlockwise k%4 == -3', function(done){
//             expect(rotation(matrix, -3)).to.equal([ 
// 	            [ 0,   8,   0 ], 
// 	            [ 0, 128,  16 ], 
// 	            [ 0,  32, 255 ] 
// 	        ]);
//             done();
//         });

//         it('Case 8: anticlockwise k%4 == -4', function(done) {
//             expect(rotation(matrix, -4)).to.equal([ 
// 	            [0,  16, 255],
// 		        [8, 128,  32],
// 		        [0,   0,   0]
// 	        ]);
//             done();
//         });
//     });

//     // describe ('Run test for problem 4', function() {
//     //     it('status', function(done){
//     //         request('http://localhost:8080/about', function(error, response, body) {
//     //             expect(response.statusCode).to.equal(404);
//     //             done();
//     //         });
//     //     });

//     // });
// });