var run = exercise('running');
function exercise(x) {
   return function() {
      console.log("Today's exercise: " + x);
    }
  }
run();
var swim = exercise('swimming');
function exercise(y) {
   return function() {
      console.log("Today's exercise: " + y);
    }
  }
swim();