function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

// singSong();

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}!`);
}

function repeat(msg, numTimes){
    let result = '';
    for(let i = 0; i < numTimes; i++) {
        result += msg;
    }
    console.log(result);
}

function add(x, y){
    if(typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}