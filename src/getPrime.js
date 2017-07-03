'use strict';
module.exports = {

getPrimes:(n)=> {

    var num = [], primes = [];

    for (var i = 2; i <= n; ++i) {

        if (!num[i]) {

            primes.push(i);

            for (var j = i << 1; j <= n; j += i) {

                num[j] = true;

            }

        }

    }

    return primes;

}
}