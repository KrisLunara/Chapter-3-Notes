//Storage for responses and stuff

let answers=['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely',
    'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes',
    'Reply hazy, try again', 'Ask again later', 'Better not to tell you', 'Cannot predict now',
    'Concentrate and ask again', "Don't count on it", 'My reply is no', 'My sources say no',
    'Outlook not so good', 'Very doubtful'];
//I really just hand typed all 20 responses when I could have just copy and paste :')

let randomNum= Math.floor(Math.random()*answers.length);
console.log(randomNum);
let answer = answers[randomNum];

let BallArt = ['(/ ^ ω^)/', '( •ω•) ♥ (•ω• )'];
//I don't know if these count, but I did make these
let NumArt=Math.floor(Math.random()*BallArt.length);
let RespondArt= BallArt[NumArt];

console.log(`I've come to an answer:\n${answer}\n${RespondArt}`);