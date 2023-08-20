//Languages string data object
//Example 1 - Translator

var languagesData = {
    "fa": {
        "hi" : "سلام"
    },
    "en" : {
        "hi" : "Hello"
    },
}

//function that we use to create translator
function createTranslator(lang){
    function translator(key){
        return languagesData[lang][key];
    }
    return translator
}

var persianTranslator = createTranslator("fa");
var englishTranslator = createTranslator("en");


console.log(persianTranslator("hi"));
console.log(englishTranslator("hi"));