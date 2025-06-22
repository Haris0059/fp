class Maybe {
    static of (x) {
    if (x === undefined || x === null) {
        return new Nothing();
    } return new Just(this.x);
    }
}

class Just extends Maybe {
    constructor(x) {
        super();
        x = this.x;
    }

    map(fn) {
        return Maybe.of(fn(this.x));
    }

    chain(fn) {

    }

    unwrap() {
        return this.x;
    }

    toString() {
        return `${this.constructor.name}(${this.x})`;
    }

}