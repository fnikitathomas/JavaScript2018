/** An Example of the response you will receive when making an Http request
 * https://dog.ceo/api/breeds/image/random
 *
 * {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
    }
 *
 * 
 * 
 */

/**
 * As a user, I should be able to click on the a button to see random dog images
 * Please use Fetch in this Example
 *
 */

const loadImage = url => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((resp)=> resp.json())
  .then((data)=> renderImageToPage(data.message))
};

/** This function should render an image to the page */
const renderImageToPage = src => {
  $("#image").prop("src", src);
};

var element = document.getElementsByTagName('button')[0]

element.addEventListener('click',(e)=>{
  loadImage()
})

