const startButton = document.querySelector('#start-btn');
const nextButton = document.querySelector('#next-btn');
const questionContainer = document.querySelector('#question-container');
const question=document.querySelector('#question');
const answerButton=document.querySelector('.answer-btn');
const bodyHtml=document.querySelector('body');
let shuffledQuestions , currentQuestion;
let point = 0;
//Add Listener Start Button
startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',nextQue);
answerButton.addEventListener('click',function(e){
    const selectButton =e.target;
    if(selectButton.getAttribute('correct')==='true'){
      bodyHtml.classList.add('correct');
      point = point + 10;
    }
    else{
      bodyHtml.classList.add('wrong');
    }
    nextButton.classList.remove('hide');
    answerButton.childNodes.forEach(child => {
      if(child.getAttribute('correct')==='true'){
        child.classList.add('true');
      }
      else{
        child.classList.add('false');
      }
    });
    if(currentQuestion >= shuffledQuestions.length ){
      bodyHtml.className='';
      question.textContent=`Puanınız : ${point}`;
      answerButton.classList.add('hide');
      startButton.innerText='Restart';
      startButton.classList.remove('hide');
      nextButton.classList.add('hide');
    }
  });



//Functions

function startGame(){
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    answerButton.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    console.log(shuffledQuestions);
    currentQuestion = 0;
    nextQue();
  }

function showQuestion(){
    nextButton.classList.add('hide');
    question.textContent=questions[currentQuestion].question;
    questions[currentQuestion].answers.forEach(answer =>{
        const a =document.createElement('a');
        a.innerText=answer.text;
        a.classList.add('btn');
        a.setAttribute('href','#');
        a.setAttribute('correct',answer.correct);
        answerButton.appendChild(a);
    });
    currentQuestion++;

}

function nextQue(){
  bodyHtml.className='';
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild)
  }
    console.log(questions[currentQuestion]);
    showQuestion();

}



const questions = [
    {
      question: 'JavaScript is a ___ -side programming language.',
      answers: [
        { text: 'Client', correct: false },
        { text: 'Server', correct: false },
        { text: 'Both', correct: true },
        { text: 'None', correct: false }
      ]
    },
    {
      question: 'Which of the following will write the message “Hello DataFlair!” in an alert box?',
      answers: [
        { text: 'alertBox(“Hello DataFlair!”);', correct: false },
        { text: 'alert(Hello DataFlair!);', correct: false },
        { text: 'msgAlert(“Hello DataFlair!”);', correct: false },
        { text: 'alert(“Hello DataFlair!”);', correct: true }
      ]
    },
    {
      question: 'How do you find the minimum of x and y using JavaScript?',
      answers: [
        { text: 'min(x,y);', correct: false },
        { text: 'Math.min(x,y)', correct: true },
        { text: 'Math.min(xy)', correct: false },
        { text: 'min(xy);', correct: false }
      ]
    },
    {
      question: 'Which are the correct “if” statements to execute certain code if “x” is equal to 2?',
      answers: [
        { text: 'if(x 2)', correct: false },
        { text: 'if(x = 2)', correct: false },
        { text: 'if(x == 2)', correct: true },
        { text: 'if(x != 2 )', correct: false }
      ]
    },
    {
      question: 'What will the code return? Boolean(3 < 7)',
      answers: [
        { text: 'True', correct: true },
        { text: 'false', correct: false },
        { text: 'Nan', correct: false },
        { text: 'SyntaxError', correct: false }
      ] 
    }
  ]
// const questions=[
//   {
//     question: 'En uzun sevişmeniz kaç dk sürmüştür ?',
//     answers: [
//         { text: '10dk', correct: false },
//         { text: '5dk', correct: false },
//         { text: '35dk', correct: true },
//         { text: '1dk', correct: false }
//             ]
//   },
//   {
//     question: 'Eda Bilgili en hızlı kaç dk da boşalmıştır ?',
//     answers: [
//       { text: '50dk', correct: false },
//       { text: '15dk', correct: false },
//       { text: '35dk', correct: false },
//       { text: '5dk', correct: true }
//     ]
//   },
//   {
//     question: 'İsmail Çetin en hızlı kaç dk da boşalmıştır ?',
//     answers: [
//       { text: '50dk', correct: false },
//       { text: '15dk', correct: true },
//       { text: '35dk', correct: false },
//       { text: '10sn', correct: false }
//     ]
//   },
//   {
//     question: 'Bir günde en fazla kaç defa seviştiniz ?',
//     answers: [
//       { text: '5', correct: false },
//       { text: '8', correct: false },
//       { text: '3', correct: false },
//       { text: '11', correct: true }
//     ]
//   },
//   {
//     question: 'İsmailin Pipisi kaç metre dir ?',
//     answers: [
//       { text: '0.153', correct: true },
//       { text: '0.25', correct: false },
//       { text: '0.302', correct: false },
//       { text: '0.1', correct: false }
//     ]
//   },
//   {
//     question: 'Eda nın çişi ne zaman gelmiştir ?',
//     answers: [
//         { text: 'Yemek yerken', correct: false },
//         { text: 'Film izlerken', correct: false },
//         { text: 'Top noktada sevişirken', correct: true },
//         { text: 'Sohbet Ederken', correct: false }
//             ]
//   },
//   {
//     question: 'İsmail Tuz ihtiyacını nereden karşılar ?',
//     answers: [
//       { text: 'Yemeklerden', correct: false },
//       { text: 'Edanın vajinasından', correct: true },
//       { text: 'Sodadan', correct: false },
//       { text: 'Sudan', correct: false }
//     ]
//   },
//   {
//     question: 'İsmail Çetin sakalı nasıl bu kadar gür oluyor ?',
//     answers: [
//       { text: 'Sihirli su ile', correct: true },
//       { text: 'Sakal Serumu', correct: false },
//       { text: 'Sarımsak', correct: false },
//       { text: 'Hiçbiri', correct: false }
//     ]
//   },
//   {
//     question: 'Eda ismaili kaç defa yalayarak boşaltmıştır ?',
//     answers: [
//       { text: '5', correct: false },
//       { text: '0', correct: true },
//       { text: '4', correct: false },
//       { text: '1', correct: false }
//     ]
//   },
//   {
//     question: 'İsmai Eda dan ne sıklıkla dayak yer ?',
//     answers: [
//       { text: 'Ayda Bir', correct: false },
//       { text: 'Haftada Bir', correct: false },
//       { text: 'Neredeyse Hergün', correct: true },
//       { text: 'Asla yemez', correct: false }
//     ]
//   },
//   {
//     question: 'Bonus Soru: Eda ile İsmail arasında yapılan güreşmelerde kim kaç defa kazanmıştır ?',
//     answers: [
//       { text: 'İsmail : 0 Eda : 0', correct: false },
//       { text: 'İsmail : 1 Eda : 1', correct: false },
//       { text: 'İsmail : 0 Eda : 2', correct: false },
//       { text: 'İsmail : 2 Eda : 0', correct: true }
//     ]
//   }


// ]