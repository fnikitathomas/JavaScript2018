/**
 * Using addEventListener, attach an event to each jewel <img> so that, when clicked, it will:
 * 1.) Update the count in the counter box
 * 2.) Remove the jewel from the page
 */
let el0 = document.getElementsByTagName('img')
let c0 = document.getElementById('counter'), count = 0

Array.prototype.forEach.call(el0,(i)=> i.addEventListener("click",(e)=> {
    i.parentElement.removeChild(i)
    c0.textContent = ++count
}))