const franc = require('franc');
const langs = require('langs');
const input = process.argv[2];
// const input = "こんにちわ. 私の名前はザックです"

try {
    const languageCode = franc(input);
    if (!languageCode || languageCode === 'und') {
        console.log("Sorry, couldn't figure out! Try with more sample text!");
    } else if (languageCode !== undefined)  {
        const language = langs.where("2", languageCode);
        console.log(language.name);
    }
} catch (error) {
    console.log("Sorry, couldn't figure out! Try with more sample text!");
}


