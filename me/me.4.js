//#1 independent variables, all are array
let ids = [1, 2];
let quests = ['what is your name?', 'where are you?'];
let answers = ['Umaporn', 'at home'];

//#2 array of objects, easy iterate all items under a single variable
//ส่วนใหญ่ใช้แบบนี้ มันจะคลอบคลุมกว่า
let quest3 = [
  { id: 1, question: 'What is your name?', answer: 'Umaporn' },
  { id: 2, question: 'Where are you?', answer: 'at home' }
];

//#3 one object, each property stores with array
let quest4 = {
  ids: [1, 2],
  quests: ['what is your name?', 'where are you?'],
  answers: ['Umaporn', 'at home']
};