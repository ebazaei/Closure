//Languages string data object

//Example 1 - Translator
console.log("---Translator---");

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

//Example 2
console.log("---Adder---");

function createAdder(size){
    function add(y){
        return y + size;
    }
    return add;
}

var addTwo = createAdder(2);
var addTen = createAdder(10);

addTwo(6); //6+2 = 8
addTen(5); //5+10 =15

var res = createAdder(8)(6);  //8+6 = 14

console.log(res);



//-------------------------

const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter;}
})();

function myFunction(){
  document.getElementById("demo").innerHTML = add();
}
