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
