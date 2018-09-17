/**
 * Create a function with a private variable called counter
 * The function should return two methods
 * It should return a function that accepts a parameter of type number. The function should add the nunber to counter
 * The second method should return another function to display the counter method
 *
 */

function updateCounter() {
  var counter = 0;
  return {
    add: function(num) {
      counter += num
    },
    retreive: function() {
      return counter
    }
  };
}
var update = updateCounter()
update.add(9)
console.log(update.retreive())