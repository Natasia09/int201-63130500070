//class Question for creating question object
class Question{
    constructor(num,question,choice,correctChoice){
        this._num = num;//store question's no.
        this._question = question.toString();//store question
        this._choice = choice;//store answer
        this._correctChoice = correctChoice;//store the correct Choice(A,B,C,D)
    }
    //method showquestion for returning question + answer
    showQuestion(){
        return `Question No. ${this._num} ${this._question}
        A: ${this._choice._a}
        B: ${this._choice._b}
        C: ${this._choice._c}
        D: ${this._choice._d}`;
    }
}
//class Choice for creating Choice object nested inside question object
class Choice{
    constructor(a,b,c,d){
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    }
}

//class Person for creating Person object
class Person{
    constructor(name){
        this._name = name;
        this._score = 0;
        this._answerResult;
    }
    //method giveAnswer use when person answering requesting 2 parameters question variable and answer's choice ("A","B","C","D")
    giveAnswer(question,answer){
        let question_result = question._name;
        let answer_result = answer.toString();
        console.log(question_result);
        console.log(question._name);
        this._answerResult += {};
        if(question._correctChoice==answer.toUpperCase()){
            this._score++;
            return "Your answer is correct! +1 point";
        }
        return "Your answer is wrong!";
    }
    //method showPerson for returning person's detail + record
    //Didn't yet used
    showPerson(person){
        return `Name : ${_name}
        Score result : ${_score}`
    }

}

//Create 5 question
let q1 = new Question(1,
                    "What is the answer of 1+1", 
                    new Choice(1,2,3,4),
                    "B");

let q2 = new Question(2,
                    "Which grammar is correct?",
                    new Choice("The banana were eat",
                            "The banana was ate", 
                            "The banana was eaten",
                            "The banana is eating by monkey",
                    "C"));

let q3 = new Question(3,
                    "Which one of these syntax is not Primitive data",
                    new Choice("Integer",
                            "Float",
                            "Boolean",
                            "Map"),
                    "D");

let q4 = new Question(4,
                    "Which one is not synonym to the word 'beautiful'",
                    new Choice("Naughty",
                            "Pretty",
                            "Gorgeous",
                            "Beauty"),
                    "A");

let q5 = new Question(5,
                    "Which one is not appropriate program/application for drawing",
                    new Choice("Adobe Illustrator",
                            "Visual Studio Code",
                            "Clip Studio Paint",
                            "Medibang"),
                    "B");
//Create Person
let p1 = new Person("Ann");
//show q1
console.log(q1.showQuestion());

//show q1 on console
console.log(q1.showQuestion());
//p1 answer question 1 with "B"
p1.giveAnswer(q1,"B");
//show q1
console.log(p1);

//show q3 on console
console.log(q3.showQuestion());
//p1 answer question 3 with "A"
console.log(p1.giveAnswer(q3,"A"))
//show q1
console.log(p1);