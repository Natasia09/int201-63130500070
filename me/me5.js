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
      return `id: ${this._id}, question: ${this._question} }`;
    }
  }
  let quest1 = new Question(1, 'Q1');
  let quest2 = new Question(2, 'Q22');
  
  Question.prototype.getQuestLength = function () {
    return this._question.length;
  };
  
  console.log(quest1.getQuestLength());
  console.log(quest2.getQuestLength());