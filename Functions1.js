// //#1
// function findAreaOfRectangle(length, width){
//     console.log(`The area of a ${length} x ${width} rectangle is ${length*width}`);
// }
//
// findAreaOfRectangle(10,10);
// findAreaOfRectangle(3,8);

//#2
// function findAreaOfCircle(radius){
//     console.log(`the area of a circle with a ${radius} radius is ${radius*radius*3.14}`);
// }
// findAreaOfCircle(5);
// findAreaOfCircle(3);

// //#3
// function findMin(num1, num2){
//     if (num1>num2){
//         console.log(`${num2} is smaller.`);
//     } else{
//         console.log(`${num1} is smaller.`);
//     }
// }
// findMin(2,6);
// findMin(9,1);

//#4
// function checkEquality(num1, num2){
//     if (num1===num2){
//         console.log(`${num1} and ${num2} are equal.`);
//     } else {
//         console.log(`${num1} and ${num2} aren't equal.`);
//     }
// }
// checkEquality(35,5);
// checkEquality(1,1);

//#5
// function calculateLargestRectangle(width1, length1, width2, length2){
//     const Rec1 = width1*length1;
//     console.log(`Rectangle 1 has an area of ${Rec1}`);
//
//     const Rec2 = width2*length2;
//     console.log(`Rectangle 2 has an area of ${Rec2}`);
//
//     if (Rec1>Rec2){
//         console.log(`The first rectangle is bigger area by ${Rec1-Rec2}.`);
//     } else if (Rec2>Rec1){
//         console.log(`The second rectangle has a bigger area by ${Rec2-Rec1}`);
//     } else{
//         console.log(`The rectangles have the same area.`)
//     }
// }
// calculateLargestRectangle(5,5, 4,4);
// calculateLargestRectangle(10,10, 10,10);

//#6

function charityCollection(money1, money2, money3){
    const sum = money1 + money2 + money3;

    if (money1 >= 0 && money2>= 0 && money3 >=0){
        if (sum >=1000){
            console.log(`Thank you for donating $${sum}!
            \nWe'll also donate $${sum} for your donation of over $1000.
            \nThe charity will receive $${sum*2}.`);
        }else {
            console.log(`Thank you for donating $${sum}.`);
        }
    } else {
        console.log("ERROR!\nPlease input a valid option.");
    }
}

charityCollection(30,82,12);
charityCollection(-1, -4,-10);