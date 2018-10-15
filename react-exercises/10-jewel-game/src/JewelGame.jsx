/**
 * You will remake the addEventListener assignment (found in exercises/07-events-jewel)
 * into a React app. When the user clicks on a jewel, two things should happen:
 * 1.) The number in the counter box on the top right should increase by 1
 * 2.) The jewel should be removed from the page
 *
 * With this assignment, you will use a React class, state, and event handler(s).
 * 
 * Here is the static HTML that your React app should render:
<main class="JewelGame">
    <div class="Counter">0</div>
    <img src="jewel-blue.svg" class="Jewel" alt="" width="128" height="128" tabindex="-1" role="button">
    <img src="jewel-green.svg" class="Jewel" alt="" width="128" height="128" tabindex="-1" role="button">
    <!-- ... More images, that alternate between green and blue -->
</main>
 *
 * Hint: I suggest you look at these slides
 * @see https://slides.com/jamaltaylor/intro-to-react#/
 * - Looping Through Arrays in JSX
 * - Creating Components with the React Component Class
 * - Setting Initial State
 * - Setting State with Events (passing arguments to event handlers)
 * - Conditional Rendering
 */

import React, { Component } from "react";
import "./JewelGame.css";
import jewelBlue from "./jewel-blue.svg";
import jewelGreen from "./jewel-green.svg";

/**
 * @constant {array} an array of nested object, with each object representing a single jewel
 * @see https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
 * Hint: one approach is to set this as initial state
 * YOU CAN ALTER THIS to take any shape that you want
 */
const jewels = [...Array(35).keys()].map(num => {
  return {
    image: num % 2 === 0 ? jewelBlue : jewelGreen,
    isVisible: true
  };
});
// Hint: you can pass down more properties to Jewel
function Jewel(props) {
  return (
    <img
      src={props.image}
      className="Jewel"
      alt=""
      width="128"
      height="128"
      tabIndex="-1"
      role="button"
      onClick={props.onClick} // (me) - Did this on instinct, and I am glad I did...
    />
  );
}

function Counter(props) {
  //console.log(this) --> undefined - (me) - (This is when the light switched on)
  return <div className="Counter">{props.count || 0}</div>;
}

// Convert this to a React Component Class
/*
function JewelGame() {
  return (
    <main className="JewelGame">
      <Counter />
      {jewels.map((jewel, index) => {
        const key = "jewel-" + index;
        return <Jewel image={jewel.image} key={key} />;
      })}
    </main>
  );
} (me) - Kept for historical purposes
*/

// (me) - Basically the code you posted, but I now have a better understanding of it
class JewelGame extends Component {
  // (me) - In the constructor we can set both state && properties
  constructor(props){
    super(props)
    this.state = {...jewels} // (me) - Yay!! See next comment->
    this.count = 0
    this.handleClick = this.handleClick.bind(this)
  }

/**
 * Originally I used `this.state = jewels` above. Unfortunately since 'jewels' is an Array
 * I received this in devtools:"Warning: JewelGame.state: must be set to an object or null"
 * A React class's state must be an Object or null, period. The code still executed, but it
 * exposed a flaw that could be exploited. Ergo, I used the spread operator in its stead.
 * The following code is kept for testing in the handleClick() method:
 *    console.log("index",idx)
 *    console.log("newState:",newState,"Inside handler: Array.isArray?",Array.isArray(newState))
 *    console.log("count",this.count)
 * `Object.assign(this.state)` === `{...this.state}`
 */

  handleClick(idx){
    let newState = {...this.state} // (me) - returns an iterable Object with an index
    newState[idx].isVisible = false;
    this.count += 1
    this.setState(newState);
  }

/**
 * (me) - Kept for testing: insert inside render() before the return statement -->
 * console.log("this.state",this.state,"\nArray.isArray?",Array.isArray(this.state))
 * <-- Thanks, Matina!
 */

  render(){
    return (
      <main className="JewelGame">
        <Counter count={this.count}/>
        {jewels.map((jewel, index) => {
          const key = "jewel-" + index;
          return jewel.isVisible? <Jewel image={jewel.image} key={key} onClick={()=>this.handleClick(index)}/> : null;
        })}
      </main>
    );
  }
}

export default JewelGame;
