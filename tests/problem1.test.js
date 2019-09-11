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
