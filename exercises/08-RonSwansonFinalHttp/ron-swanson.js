/**
 * use this to url to make your api calls: https://ron-swanson-quotes.herokuapp.com/v2/quotes'
 *  As a user, I should be able to click on XHR and get a quote
 *  As a user, I should be able to click on axios and get a quote
 *  As a user, I should be able to click on FETCH and get a quote
 *
 */

function loadXMLHttpQuote(callback) {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4 && xhr.status === 200){
        callback(JSON.parse(xhr.responseText))
      }
    }
    xhr.open('GET','https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    xhr.send()
}

var el0 = document.getElementsByTagName('blockquote')[0] // cache

document.getElementsByTagName('button')[0].addEventListener('click',(e)=>loadXMLHttpQuote((resp)=>el0.textContent = resp.toString()))

const renderToPage = data =>{
    el0.textContent = data.toString()
}

const loadFetchQuote = url =>{
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then((resp)=> resp.json())
    .then((data)=> renderToPage(data))
    .catch((err)=> console.log(err))
}

document.getElementsByTagName('button')[1].addEventListener('click',(e)=>loadFetchQuote())

const loadAxiosQuote = url =>{
    axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then((resp) => renderToPage(resp.data))
    .catch((err) => console.log(err))
}

document.getElementsByTagName('button')[2].addEventListener('click',(e)=>loadAxiosQuote())
