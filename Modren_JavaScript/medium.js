const avgArray = () => {
    let arraynum = [1, 24, 4, 8, 19];
    let total = arraynum.reduce((a, b) => {
        return a + b;
    })
    let average = total / arraynum.length;
    console.log(average);
}
avgArray();