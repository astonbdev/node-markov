/** Command-line tool to generate Markov text. */

/** takes in file path and returns contents of file */
async function getFileContents(path){
    const fsP = require("fs/promises");
    const contents = await fsP.readFile(path);

    return contents;
}