console.log("2" > 1);
console.log("010" > 9);
console.log("0o10" > 9);
console.log(0o10 > 9);

console.log('\nNULL RESULTS');
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null === 0);

/*
Comparisons convert the values whereas equals do not
== checks only value
=== checks value with type
*/

console.log(undefined === undefined); // fasle
console.log(undefined == 'undefined'); // false as well

console.log(2 == '2'); // true
console.log(2 === '2'); // false
