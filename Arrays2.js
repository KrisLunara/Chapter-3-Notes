//#1 & #2
function count(n){
    let myArr=[];
    if (n<=0){
        console.log('ERROR!')
    } else {
        for (let i=1; i<=n; i++){
            myArr.push(i);
        }
        console.log(myArr);
    }
}
count(-5);
count(7);

// //#3
// function Xes(x){
//     let myArr=[];
//     if (x<=0){
//         console.log('ERROR!')
//     } else {
//         for (let i=1; i<=x; i++){
//             myArr.push(i);
//         }
//         console.log(myArr);
//     }
// }
// Xes(2)
