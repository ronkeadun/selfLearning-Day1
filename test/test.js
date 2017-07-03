const assert = require('chai').assert;
const myApp = require('../src/getPrime.js')

describe("Get prime numbers", ()=> {

  it("should return [] as prime numbers for 0", ()=> {

    assert.deepEqual(myApp.getPrimes(0), []);

  })

  it("should return [2] as prime numbers for 2", ()=> {

    assert.deepEqual(myApp.getPrimes(2), [2]);

  })

  it("should return [2, 3] as prime numbers for 3", ()=> {

    assert.deepEqual(myApp.getPrimes(3), [2, 3]);

  })

  it("should return [ 2, 3, 5] as prime numbers for 5", ()=> {

    assert.deepEqual(myApp.getPrimes(5), [ 2, 3, 5]);

  })

  it("should return [ 2, 3, 5, 7 ] as prime numbers for 10", ()=> {

    assert.deepEqual(myApp.getPrimes(10), [ 2, 3, 5, 7 ]);

  })

  it("should return [ 2, 3, 5, 7, 11, 13 ] as prime numbers for 15", ()=> {

    assert.deepEqual(myApp.getPrimes(15), [ 2, 3, 5, 7, 11, 13 ]);

  })

  it("should return [2, 3, 5, 7, 11, 13, 17] as prime numbers for 17", ()=> {

    assert.deepEqual(myApp.getPrimes(17), [ 2, 3, 5, 7, 11, 13, 17]);

  })

  it("should return [2, 3, 5, 7] as prime numbers for 8", ()=> {

    assert.deepEqual(myApp.getPrimes(8), [ 2, 3, 5, 7]);

  })

  it("should return [] as prime numbers for 1", ()=> {  

    assert.deepEqual(myApp.getPrimes(1), []);

  })

  it("should return [] as prime numbers for -20", ()=> {

    assert.deepEqual(myApp.getPrimes(-20), []);

  })

})