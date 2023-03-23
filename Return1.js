const readLine = require('readline-sync');

// //#1
// function nameSwapper(){
//     let first = readLine.question("First Name: ");
//     let last = readLine.question("Last Name: ");
//     return(`${last}, ${first}`);
// }
//
// let myName = nameSwapper();
// console.log(myName);


// //#2
// function NumberGenerator(){
//     let first = Number(readLine.question("Enter a number: "));
//     let last = Number(readLine.question("Enter another: "));
//     if (first>=0 && first<=9 && last>=0 && last<=9){
//         return(`${first}${last}`);
//     } else {
//         return ("ERROR!\nInput numbers between 0-9");
//     }
//     }
// let total = NumberGenerator();
// console.log(total);

// //#3
// //Average Temperature
// function Avg(temp1, temp2, temp3, temp4, temp5, temp6, temp7){
//     let sum = temp1+temp2+temp3+temp4+temp5+temp6+temp7;
//     let total= sum/7;
//     return(Math.floor(total));
// }
//
// Avg(50, 58, 53, 54, 61, 59, 60);
// Avg(80, 85, 81, 84, 87, 91, 84);

// //#4
// function Charity(){
//     let people = readLine.question("Enter a number: ");
//
// }

// //#5
// function score(){
//     let score1 = readLine.question(`Enter round 1 score for player 1\n(0-180): `);
//     let score4 = readLine.question(`Enter round 1 score for player 2\n(0-180): `);
//     let score2 = readLine.question(`Enter round 2 score for player 1\n(0-180): `);
//     let score5 = readLine.question(`Enter round 2 score for player 2\n(0-180): `);
//     let score3 = readLine.question(`Enter round 3 score for player 1\n(0-180): `);
//     let score6 = readLine.question(`Enter round 3 score for player 2\n(0-180): `);
//     let player1 = score1 + score2 + score3;
//     let player2 = score4 + score5 + score6;
//     if(player1>player2){
//         console.log(`Player 1 wins!`);
//     } else if(player2>player1){
//         console.log(`Player 2 wins!`)
//     } else{
//         console.log("The game is tied!");
//     }
// }
// score();