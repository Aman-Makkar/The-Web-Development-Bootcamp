// try {
//     hello.toUpperCase();
// }
// catch {
//     console.log("Error!!!!")
// }

// hello.toUpperCase();

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    }
    catch (e) {
        console.log("Please pass a string!");
    }
}