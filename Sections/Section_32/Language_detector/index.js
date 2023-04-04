const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];
// const input = "こんにちわ. 私の名前はザックです"

try {
    const languageCode = franc(input);
    if (!languageCode || languageCode === 'und') {
        console.log("Sorry, couldn't figure out! Try with more sample text!".red);
    } else if (languageCode !== undefined)  {
        const language = langs.where("2", languageCode);
        console.log(`our best guess is: ${language.name}`.green);
    }
} catch (error) {
    console.log("Sorry, couldn't figure out! Try with more sample text!");
}


