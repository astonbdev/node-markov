/** Textual markov chain generator. */

const { builtinModules } = require("module");

const MAX_LENGTH = 25;


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    console.log(this.words);
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

        if(!this.words[nextWordIdx]){
          adjacentWords.push(null);
        }
        else{
          adjacentWords.push(this.words[nextWordIdx]);
        }
    }

    return chains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!
    const firstWord = this.words[0];
    const markovText = [];

    let word = firstWord;

    while(word!=null){

      markovText.push(word);

      let randomIdx = this.getRandomIntInclusive(0, this.chains[word].length - 1);

      word = this.chains[word][randomIdx];

      if(markovText.length > MAX_LENGTH){
        word = null;
      }
    }

    return markovText.join(" ");
  }

  /** returns random integer min and max inclusive */

  getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
}

module.exports = MarkovMachine;

let markov = new MarkovMachine(
  "The cat is in the hat. The cat is the cat. The hat is a cat."
);