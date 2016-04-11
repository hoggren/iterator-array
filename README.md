Iterator functions for Javascript arrays.

#### Install
`npm install iterator-array --save`

#### Usage
    var it = require('iterator-array');

    var array = ['Foo', 'bar', '2000'];

    it.each(array, function(index) {
        console.log('item ' + this + ' has index ' + index);
    });

#### Functions
`.each(array, function(index) {})`  
Iterates through an array in normal order.

`.random(array, function(index) {})`  
Iterates through an array in random order.

`.reverse(array, function(index) {})`  
Iterates through an array in reverse order.

`.rule(array, function(item) {}, function(index) {})`  
Iterates through an array and calls callback #2 if callback #1 returns true.

`.unique(array, function(index) {})`  
Iterates through an array and and calls only on unique values.

##### Examples
    it.each(array, function(index) {
        console.log(this + ' item has index ' + index);
    });

    it.random(array, function(index) {
        console.log(this + ' item has index ' + index);
    });

    it.reverse(array, function(index) {
        console.log(this + ' item has index ' + index);
    });

    it.rule(array, function(a) {
        return (a === 'Foo' || a === '2000');
    }, function(index) {
        console.log(this + ' item has index ' + index);
    });

    it.unique(array, function(index) {
        console.log(this + ' item has index ' + index);
    });

#### Author
Patrik Höggren  
patrik (a) hwkdev.se
