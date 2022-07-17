const myMath = {
    PI: 3.14159,
    square(num){
        return num * num;
    },
    cube(num) {
        return num * num * num;
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log(`${this.name} says MEOWWW`);
    }
}

const meow2 = cat.meow;