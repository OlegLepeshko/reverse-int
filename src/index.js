module.exports = function reverse (n) {
    let num = String(Math.abs(n));
     return num.split('').reverse().join('');
}
