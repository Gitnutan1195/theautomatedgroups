const name = "nutan"
const repoCount = 40

console.log(`My name is ${name} and summit the repo ${repoCount}`)

const gameName = new String("nutans")
console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);


const newStrings = gameName.slice(-5,4)
console.log(newStrings);

//trim
//replace
//splite
//slice
//substring
//indexof
//charAt