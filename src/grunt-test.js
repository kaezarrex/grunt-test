(function () {

    var hello = function (name) {
        name = name || 'world';
        return 'hello ' + name;
    };

    var foo = function (func, args) {
        var results = [],
            i;

        for (i = 0; i < args.length; i++) {
            results.push(func(args[i]));
        }
    };

    foo(hello, ['jerry', 'kramer', 'elaine', 'george']);

}());
