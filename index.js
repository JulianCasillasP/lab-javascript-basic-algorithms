// Iteration 1: Names and Input
let hacker1 = "Julian";
let hacker2 = "Anthony";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
// Iteration 3: Loops
let palabraNueva1 = "";
for (let i = 0; i < hacker1.length; i++) {
    let letra = hacker1[i]; 
    let letraMayuscula = letra.toUpperCase()
    let letraSeparadas = `${letraMayuscula} `
    palabraNueva1 += letraSeparadas 
}
console.log(palabraNueva1);

let palabraRevertida ="";
 for (let i = hacker1.length - 1; i >= 0; i--){
    palabraRevertida += hacker1[i];

}
console.log(palabraRevertida)
let hacker1Mayuscula = hacker1[0].toUpperCase()
let hacker2Mayuscula = hacker2[0].toUpperCase()
if (hacker1Mayuscula < hacker2Mayuscula ) {
    console.log(`The ${hacker1} name goes first.`)
}
else if (hacker2Mayuscula < hacker1Mayuscula) {
    console.log(`Yo, the ${hacker2} goes first, definitely.`)
}
else (console.log("What?! You both have the same name?"))
// Bonus 1

let longText = "Lorem ipsum dolor sit amet consectetur adipiscing elit, sociis malesuada etiam luctus pharetra est euismod proin, facilisis fringilla diam aliquet lectus laoreet. Interdum elementum turpis diam lobortis luctus in imperdiet vehicula, tincidunt ad volutpat egestas pulvinar massa feugiat, pellentesque dictum montes augue nascetur nibh erat. In sapien varius aliquet luctus dignissim condimentum maecenas fames velit, lectus donec dictum pellentesque hendrerit sem porttitor libero morbi nam, quam inceptos conubia justo per augue venenatis blandit."

let space = " ";
let counterWord = 0;

for (let i = 0; i < longText.length; i++){
    if(longText[i] === space){
        counterWord += 1
    }
}
console.log(counterWord)