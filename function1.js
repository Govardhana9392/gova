function sum(...a) {
    return a.reduce((a, c) => a + c);
}
console.log(sum(10, 20, 30, 400)); 