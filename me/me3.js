//class
function Person(name, age, job,status){
    this.name = name;
    this.age = age;
    this.job = job;
    this.status=status;
    this.sayName = function() {
    console.log(this.name);
    }
    this.sayStatus=function(){
        console.log(this.status);
    }
    }
    let person1 = new Person("Pot", 40, "Tester","single");
    let person2 = new Person("Joe", 20, "Doctor","marry");
    person1.sayName(); 
    person2.sayName(); 
 person2.sayStatus();

 //class2
 let quest = { id: 1, quest: 'what is it' }; //implicit class => let quest= new Object()
console.log(typeof quest);

class Question {//มีconstructor,get,setเพื่อให้แก้ไขค่าได้
  constructor(id, question) {
    this._id = id; //_idเป็นpropoty key
    this._question = question;
  }
  get id() {
    return this._id;//ถ้าใช้this.id มันจะเรียกตัวgetมาทำให้stack overflow
  }
  set id(id) {
    this._id = id;
  }
  get question() {
    return this_question;
  }
  set question(question) {
    this._question = question;
  }
  displayQuestion() {
    return `id: ${this._id}, question: ${this.question} }`;
  }
  getQuestLength() {
    return this._question.length;
  }
}

//class3
class Question {
    constructor(id, question) {
      this._id = id;
  
      if (question === undefined || question.length === 0)
        this._question = 'unknown';
      else this._question = question;
    }
    get id() {
      return this._id;
    }
    set id(id) {
      this._id = id;
    }
    get question() {
      return this_question;
    }
    set question(question) {
      this._question = question;
    }
    displayQuestion() {
      return `id: ${this._id}, question: ${this._question} `;
    }
  }
  let quest1 = new Question(1, 'Q1');
  let quest2 = new Question(2, '');
  let quest3 = new Question(3,"How are you?");

  Question.prototype.getQuestLength = function () {
    return this._question.length;
  };
conole.log(quest2.question);
  console.log(quest1.getQuestLength());
  console.log(quest2.getQuestLength());
  console.log(quest3.displayQuestion());
 // console.log(quest2.question);