function cutPizzaSlices(totalSlices) {
    return function (people) {
        console.log(`Each person gets ${totalSlices / people} slices of pizza`)
    }
}
var sharePizza = cutPizzaSlices(8);
sharePizza(2);
sharePizza(3);
 // prints "Each person gets 4.00 slices of pizza"