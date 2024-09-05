//Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

console.log("Reverse:", reverse("hello"));

//Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  //Return content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowercase();
  };

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  };
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  //Return content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.translation.toLowercase();
  };
}

//Inheritance in practice as  TranslatedPhrase inherits methods from the partent object.
TranslatedPhrase.prototype = new Phrase();

/*
To run file, type node in terminal, to activate REPL mode
then run command: .load palindrome.js
then: phrase = new Phrase("Racecar")
then: phrase.palindrome();
then: let frase = new TranslatedPhrase("recognize", "reconocer")
then: frase.palindrome()
*/
