/**
 * A palindrom is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 * Checks to see if a string is a palindrome. You must remove special characters.
 * @param  {[string]}  string
 * @return {Boolean}
 */
function isPalindrome(str) {
  console.log(str)
  var original = str.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase();
  var reverse = original.split('').reverse().join('');
  if(original == reverse)
    return true
  else return false
}

module.exports = {
  isPalindrome
};
