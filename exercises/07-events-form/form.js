/**
 * Validate the form when:
 * 1.) When a form input loses focus (blur)
 * 2.) When the form is submitted
 *
 * Be sure to use event delegation
 */

let er0 = document.getElementById("error")

function handleError(input) {
  if (!input.validity.valid) input.classList.add("is-invalid");
  else if (input.classList.contains("is-invalid"))
    input.classList.remove("is-invalid");
}

function inputError(input){
  if(input.tagName == 'INPUT' || input.tagName == 'SELECT'){
    for(let k in input.validity){
      if(input.validity[k] === true && !(k === 'valid' && input.validity[k] === true)){
        er0.classList.remove("hidden")
        er0.textContent = `Error: input has the following error - ${k}`
      }
      else if(k === 'valid' && input.validity[k] === true)
              er0.classList.add("hidden")
    }
    handleError(input)
  }
}

// Change this to event delegation and get this to work
document.getElementById("form").addEventListener("blur",function(e){
  // Changed id == 'codeName' to id == 'form'
  var input = e.target
  inputError(input)
},true)

document.getElementById("codeName").addEventListener("blur", function(e) {
  // Show / hide validation errors
});

// Change this to event delegation and get this to work
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault()
  const form = e.target;// form is the target
  const inputs = Array.prototype.slice.call(form.elements); // Converts to an array
  let isValid = inputs
    .map(function(input) {
      return input.validity.valid;
    })
    .every(function(validity) {
      return validity;
    });

  if (isValid) {
    document.getElementById("form").submit()
  } else {
    inputs.map((input)=> inputError(input))
  }
},true);
