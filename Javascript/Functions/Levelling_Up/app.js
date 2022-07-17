// function collectEggs(){
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

// let radius = 8;
// if(radius > 0){
//     const PI = 3.14159;
//     let msg = 'HIIII!';
// }

// console.log(radius);
// console.log(msg);

// for(let i =0 ; i < 5; i++) {
//     let msg = "ajhdjiswdbajkdb"
//     console.log(msg);
// }
// console.log(msg);

function bankRobbery(){
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Woner Woman'];
    function cryForHelp() {
        function inner(){
            for(let hero of heroes){
                console.log(`Please help us, ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
}