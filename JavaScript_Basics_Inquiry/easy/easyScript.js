var john = 'John Doe';
var nicolas = 'Nicolas Conaway';
var characterDifference = nicolas.length - john.length;

if (john > nicolas) {
    console.log('The name John Doe is longer than Nicolas Conaway by ' + characterDifference + ' characters!');
} else if (john < nicolas) {
    console.log('The name Nicolas Conaway is longer than John Doe by ' + characterDifference + ' characters!');

}