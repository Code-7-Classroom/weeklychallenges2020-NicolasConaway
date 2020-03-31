var jerrymass = 0.1;
var jerryheight = 3.93;

var tommass = 8;
var tomheight = 9;

var jerrybmi = jerrymass / (jerryheight * jerryheight);
var tombmi = tommass / (tomheight * tomheight);

var wholarger = tombmi > jerrybmi;

console.log('Is Tom’s BMI higher than Jerry’s?' + ' ' + wholarger);