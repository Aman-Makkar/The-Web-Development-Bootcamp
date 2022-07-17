// let count = 0;
// while(count < 10) {
//     console.log(count);
//     count++;
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while(guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("Congrats You got the secret!!!")

let input = prompt("Hey, say something!")
while (true) {
    input = prompt(input);
    if(input.toLowerCase() === "stop copying me") {
        break;
    }
}

console.log("OK YOU WIN!")