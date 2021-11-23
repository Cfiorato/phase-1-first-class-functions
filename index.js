function receivesAFunction (cb) {
    return (cb());
};

function returnsANamedFunction () {
    return function math () {
        return 1 + 2;
    };
};

function returnsAnAnonymousFunction () {
    return function () {
        return 2 - 1;
    };
};