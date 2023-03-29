// //#1 & #2
// function count(n){
//     let myArr=[];
//     if (n<=0){
//         console.log('ERROR!')
//     } else {
//         for (let i=1; i<=n; i++){
//             myArr.push(i);
//         }
//         console.log(myArr);
//     }
// }
// count(-5);
// count(7);

// //3
// function ReplaceX(arr, x){
//     for (let i=0; i<arr.length; i++){
//         arr[i]=x;
//     }
//     console.log(arr)
// }
//
// ReplaceX([1, 4, 1, 7], 4)

// //#5
// function BiggerX(arr){
//     if (arr[0] > arr[arr.length-1]){
//         for (let i=0; i<arr.length; i++){
//             arr[i]=arr[0];
//         }
//         console.log(arr);
//     } else if (arr[0] < arr[arr.length-1]){
//         for (let i=0; i<arr.length; i++){
//             arr[i]=arr[1];
//         }
//         console.log(arr);
//     } else if (arr[0] === arr[arr.length-1]){
//         console.log(arr);
//     }
// }
// BiggerX([4, 1]);
// BiggerX([5, 5]);
// BiggerX([10, 10]);

//#6
function Compare(arr){
    console.log(arr)
    if (arr[0] > arr[arr.length-1]){
        for (let i=0; i<arr.length; i++){
            arr[i]=arr[0];
        }
        console.log(arr);
    } else if (arr[0] < arr[arr.length-1]){
        for (let i=0; i<arr.length; i++){
            arr[i]=arr[1];
        }
        console.log(arr);
    } else if (arr[0] === arr[arr.length-1]){
        console.log(arr);
    }
}
Compare([4, 8]);