var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name ? ');
console.log('Hi '+ userName + ". Let's play a quiz!");
console.log('----------------------------------------');
var score = 0;

var highScore = [
    {
        Name: 'Anupam',
        Score: 5
    },
    {
        Name: 'Rohan',
        Score: 4
    }
]

var questionAnswers =[
    {
        question: `Who is the father of Indian Constituiton ?
        a: K.M Munshi
        b: N. Madhava Rao
        c: Dr. B.R Ambedkar 
        `,
        answer: 'c'
    },
    {
        question: `Who was the first Prime Minister of India ?
        a: Lal Bahadur Shastri
        b: Jawhar Lal Neheru
        c: Sardar Vallabhbhai Patel
        ` ,
        answer: 'b'
    },
    {
        question: ` Name the deepest ocean in the world ?
        a: Pacific Ocean
        b: Atlantic Ocean
        c: Indian Ocean
        `,
        answer: 'a'
    },
    {
        question: ` Name the deepest trench in the world ?
        a: Phillipine Trench
        b: Japan Trench
        c: Mariana Trench
        `,
        answer: 'c'
    },
    {
        question: ` Which day is celebrated as Environment Day?
        a: 5th June
        b: 3rd June
        c: 5th July 
        `,
        answer: 'a'
    }
]

function play(question, answer){
    var userAnswer = readlineSync.question(question);
    
    if(userAnswer.toUpperCase() === answer.toUpperCase()){
        console.log();
        console.log('You are right!');
        score++;
    }else{
        console.log();
        console.log('You are wrong!');
    }
    console.log('Your current score: '+ score);
    console.log('-------------------------------------');

}

function game(){
    for(var i=0; i<questionAnswers.length; i++){
        play(questionAnswers[i].question, questionAnswers[i].answer);
    }
    console.log('Your final score is : '+ score);
    console.log('---------------------------------');
    console.log('Check out the highest scores...');

    for(var j=0; j<highScore.length; j++){
        console.log(highScore[j].Name+ " : "+highScore[j].Score);
    }
    console.log('--------------------------------');
}

game();