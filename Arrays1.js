//#1
function firstElement(arr){
    if (arr.length === 0){
        console.log('Error\nNo items in array');
    } else{
        console.log(arr[0]);
    }
}
let myNums = [1, 2, 3, 4];
firstElement(myNums);

//#2
function lastElement(arr){
    let lastArr = arr[arr.length - 1];
    if (arr.length === 0){
        console.log('Error\nNo items in array');
    }else {
        console.log(lastArr);
    }
}
let Nums = [5, 6, 7, 8];
lastElement(Nums);

//#4
function revElement(arr){
    for(let rev=arr.length-1; rev>=0; rev--){
        console.log(arr[rev]);
    }
}
revElement(myNums);

//#5
function s3Element(arr){
    for(let third = 2; third < arr.length; third=third+3){
        console.log(arr[third]);
    }
}
let Skip = [1, 2, 3, 4, 5, 6, 7, 8, 9];
s3Element(Skip);

//#6
function s2Element(arr){
    for(let sec = 2; sec < arr.length; sec=sec+2){
        console.log(arr[sec]);
    }
}
s2Element(Skip);

//#7
function moreThanFour(arr){
    for(let num=0; num < arr.length; num++){
        let item = arr[num];
        if (item>4){
            console.log();
        }
    }
}