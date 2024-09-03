//Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

console.log("Reverse:", reverse("hello"));

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowercase();
  return processedContent === reverse(processedContent);
}

//Defines a Phrase object.
function Phrase(content) {
  this.content = content;
}
