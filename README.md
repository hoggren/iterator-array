Iterates over an array and sets scope to the current item, and index as parameter. Returns null if it isn't an array.

#### Install
`npm install simple-iterator --save`

#### Usage
    var iterator = require('simple-iterator');

    var array = ['Foo', 'bar', '2000'];

    iterator(array, function(index) {
        console.log(this + ' item has index ' + index);
    });

#### Author
Patrik Höggren  
patrik (a) hwkdev.se
