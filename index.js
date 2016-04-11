/*
* more examples at https://www.npmjs.com/package/iterator-array
*/
module.exports = {
    each: function(a, callback) {
        if(a.constructor !== Array)
            return null;

        for(var i = 0; i < a.length; i++) {
            callback.call(a[i], i);
        }
    },

    random: function(a, callback) {
        if(a.constructor !== Array)
            return null;

        var nths = [];

        while(true) {
            var n = Math.floor(Math.random() * a.length);
            if(nths.indexOf(n) == -1) nths.push(n);
            if(nths.length == a.length) break;
        }

        for(var i = 0; i < nths.length; i++) {
            callback.call(a[nths[i]], nths[i]);
        }
    },

    reverse: function(a, callback) {
        if(a.constructor !== Array)
            return null;

        for(var i = (a.length - 1); i > -1; i--) {
            callback.call(a[i], i);
        }
    },

    rule: function(a, rule, callback) {
        if(a.constructor !== Array)
            return null;

        for(var i = 0; i < a.length; i++) {
            if(rule(a[i]))
                callback.call(a[i], i);
        }
    },

    unique: function(a, callback) {
        if(a.constructor !== Array)
            return null;

        var b = [];

        for(var i = 0; i < a.length; i++) {
            if(b.indexOf(a[i]) == -1) b.push(a[i]);
        }

        for(var i = 0; i < b.length; i++) {
            callback.call(b[i], i);
        }
    },
}
