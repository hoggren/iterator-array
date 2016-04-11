var it = require('./index.js');

var array = ['Foo', 'bar', 'black', '2000', 'got', 'a', 'big', 'Foo'];

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
