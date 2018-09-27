/**
 * Create a function with a private variable called counter
 * The function should return two methods
 * It should return a function that accepts a parameter of type number. The function should add the nunber to counter
 * The second method should return another function to display the counter variable
 *
 */

function updateCounter(){
  let counter = 0
  return {
    add : (num) => counter += num,
    retrieve : () => {return counter}
  }
}

var counterAPI = updateCounter();
counterAPI.add(5);
counterAPI.add(5);
counterAPI.add(5);
var newCounter = counterAPI.retrieve();
