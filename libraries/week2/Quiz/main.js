// Object array

const questionAndAnswer = [
  {
  question: "What is the southern most city in the contigious United States?",
  answer: "Key West",
},
{
  question: "What is the largest living mammal on earth?",
  answer: "blue whale",
},

{
  question: "What is the name of the largest art museum in the world?",
  answer: "The Louvre",
},

{
  question: "What is the name of the deepest lake in North America?",
  answer: "Great Slave Lake",
},

{
  question: "What country has the largest shopping mall in the world?",
  answer: "China",
},

{
  question: "What rapper has the most platinum albums ever?",
  answer: "Drake",
},

];

//Math.random()

const randomQuestion = Math.round(Math.random() * questionAndAnswer.length - 1);

//question prompt
const answer = window.prompt(questionAndAnswer[randomQuestion].question); 


//answer prompt
window.alert('You answered ' + answer + '. \nThe correct answer was ' + questionAndAnswer[randomQuestion].answer + '.');






