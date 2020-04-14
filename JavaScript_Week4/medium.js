let numarray = [0, 1, 2, 4, 5, 6, 7];
numarray.splice(0, 4)
numarray.push(0, 1, 2, 4);
console.log(numarray);

const search = () => {
    let type = prompt('Search for a number 0 - 7');
    let convert = parseInt(type);
    let target = numarray.indexOf(convert);

    if (convert < 3 || 8 > convert > 3) {
        console.log(`${convert} is at position ${target} of the array`);
    } else {
        console.log(`${convert} does not exist within the array, therefore it is ${target}`);
    }
}
search();