let startBtn = document.querySelector('#startButton');
let intro = document.querySelector('#start');
let quiz = document.querySelector('#quiz');
let quizQuestion = document.querySelector('#question');
let options = document.querySelector('#options');
let option1Btn = document.querySelector('#q1');
let option2Btn = document.querySelector('#q2');
let option3Btn = document.querySelector('#q3');
let option4Btn = document.querySelector('#q4');
let quizOption1 = document.querySelector('#q1content');
let quizOption2 = document.querySelector('#q2content');
let quizOption3 = document.querySelector('#q3content');
let quizOption4 = document.querySelector('#q4content');
let ending = document.querySelector('#ending');
let score = document.querySelector('#score');
let time = document.querySelector('#time');

let quizContent = [
  {
    question: "What is the capital of California?",
    answer: 'Sacramento',
    options: ['Los Angeles', 'San Francisco', 'Sacramento', 'San Diego']
  },
  {
    question: 'Which of the following is team that is not part of the LCK?',
    answer: 'Cloud9',
    options: ['T1', 'GEN.G', 'DRX', 'Cloud9']
  },
  {
    question: 'Who is the first governor of California?',
    answer: 'Peter Burnett',
    options: ['Arnold Schwarzenegger', 'John McDougal', 'Peter Burnett', 'Ronald Reagan']
  },
  {
    question: 'When was California admitted into the Union?',
    answer: '1850',
    options: ['1850', '1788', '1891', '1903']
  },
  {
    question: 'Fill in the blank: California is the __ state to be admitted into the Union.',
    answer: '31st',
    options: ['1st', '50th', '31st', '51st']
  },
  {
    question: 'Which of the following is not in California?',
    answer: 'Time Square',
    options: ['Silicon Valley', 'Time Square', 'Hollywood', 'Disneyland']
  },
  {
    question: 'Who is the best league player of all time?',
    answer: 'Faker',
    options: ['Faker', 'Tyler1', 'Bjergsen', 'Ssumday']
  }
];

function getQuestion(index) {
  quizQuestion.textContent = quizContent[index].question;
  quizOption1.textContent = quizContent[index].options[0];
  quizOption2.textContent = quizContent[index].options[1];
  quizOption3.textContent = quizContent[index].options[2];
  quizOption4.textContent = quizContent[index].options[3];
  let answer = quizContent[index].answer;
  return answer;
};

function randomizeArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

let scoreValue = 0;
let index = 0;
let quizStatus = false;
let answer = getQuestion(index);
let timeLeft = 25;

startBtn.addEventListener('click', function (event) {
  quizStatus = true;
  randomizeArray(quizContent);
  intro.setAttribute('style', 'display: none;');
  quiz.setAttribute('style', 'display: block;');
  let counter = setInterval((timeLeft) => {
    if (timeLeft > 0) {
      timeLeft--;
      time.textContent = timeLeft;
    } else {
      quizStatus = false;
      clearInterval(counter);
    }
  }, 1000)
});

option1Btn.addEventListener("click", function (event) {
  console.log('You Chose Option A');
  choice = event.target.children[0].textContent;
  check(choice);
});
option2Btn.addEventListener("click", function (event) {
  console.log('You Chose Option B');
  choice = event.target.children[0].textContent;
  check(choice);
});
option3Btn.addEventListener("click", function (event) {
  console.log('You Chose Option C');
  choice = event.target.children[0].textContent;
  check(choice);
});
option4Btn.addEventListener("click", function (event) {
  console.log('You Chose Option D');
  choice = event.target.children[0].textContent;
  check(choice);
});

function check(choice) {
  while (quizStatus) {
    console.log(choice);
    console.log(answer);
    if (choice == answer) {
      console.log('right answer')
      scoreValue += 10;
    } else {
      console.log('wrong answer');
    }
    // index++;
    // if (index >= quizContent.length) {
    //   quizStatus = false;
    //   quiz.setAttribute('style', 'display: none;');
    //   ending.setAttribute('style', 'display: block');
    //   score.textContent = scoreValue;
    //   return;
    // } else {
    //   answer = getQuestion(index);
    // }
  }
}