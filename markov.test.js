const { hasUncaughtExceptionCaptureCallback } = require('process');
let MarkovMachine = require('./markov.js');



describe("testing getChains()", function (){

    test("test getChains() good data", function () {
        let markov = new MarkovMachine("The cat in the hat.");
        chains = {
            "The": ["cat"],
            "cat": ["in"],
            "in": ["the"],
            "the": ["hat."],
            "hat.": [null]
        }

        expect(markov.chains).toEqual(chains);
    });

    //separate test for bad data
});

describe("testing getText()", function (){

    // test("test getText() no branches", function () {
        // let markov = new MarkovMachine("The cat in the hat.");
        // chains = {
        //     "The": ["cat"],
        //     "cat": ["in"],
        //     "in": ["the"],
        //     "the": ["hat."],
        //     "hat.": [null]
        // }

        // expect(markov.chains).toEqual(chains);
    // });

    test("test getText() with branches", function () {
        let markov = new MarkovMachine("The cat is in the hat. The cat is the cat. The hat is a cat.");

        let markovSentence = markov.getText();
        let markovSentenceArr = markovSentence.split(" ");

        for (let i = 0; i< markovSentenceArr.length-2; i++){

            let currWord = markovSentenceArr[i];
            let nextWord = markovSentenceArr[i+1];

            expect(markov.chains[currWord].includes(nextWord)).toEqual(true);
        }
    });

    //separate test for bad data
});