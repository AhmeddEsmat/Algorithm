var text = "Hello World.";
var words = 0;
var vowels = 0;
str.toLowerCase();
for (var i=0; i<text.length; i++) {
    if (text[i] == " " || text[i] == ".") {
        words++;
    }
    if (text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u") {
        vowels++;
    }
}
console.log(words);
console.log(vowels);