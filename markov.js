/** Textual markov chain generator. */

const { builtinModules } = require("module");


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null]
   *  }
   *
   * */

  getChains() {
    // TODO: implement this!
    let chains = {}; // {"word": [adjacentWord1, adjacentWord2, ....]}

    for(let idx in this.words){
        const word = this.words[idx];

        if(!chains[word]){
          chains[word] = [];
        }

        let adjacentWords = chains[word];

        let nextWordIdx = (parseInt(idx)+1);

        let nextWord = this.words[nextWordIdx];
        adjacentWords.push(nextWord);
    }

    return chains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!


    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
  }


}

/** standard frequency counter takes in iterable, returns key value pairs with value as counts */
// function frequencyCounter(phrase){
//   let adjacentMap = {}; // {"word": [adjacentWord1, adjacentWord2, ....]}

//   for(let idx in phrase){
//       const word = phrase[idx];
//       let adjacentWords = adjacentMap[word] || [];

//       let nextWord = phrase[idx+1];
//       adjacentWords.append(nextWord);
//   }

//   return adjacentMap;
// }\

module.exports = MarkovMachine;

let markov = new MarkovMachine(
  "The cat is in the hat. The cat is the cat. The hat is a cat."
  );