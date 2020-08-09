function Quiz(question , answer , option){
    this.questions = question;
    this.answer = answer;
    this.option = option;
}

var question1 = new Quiz("What is JS?", "JavaScript", ["JavaScript", "JavaScrapt", "Java", "JadoScript"]);
var question2 = new Quiz("how we Concatenate two numbers or strings?","+",["-","+","#","%"]);
var question3 = new Quiz("how to increment in a Number","num++",["num--","num!!","num++","num+="]);
var question4 = new Quiz("how to derement in a Number","num--",["num--","num++","num@","num+="]);
var question5 = new Quiz("what is the answer of following expression 1 + (3 * 4)","13",["11","12","13","16"]);
var question6 = new Quiz("why we are using keyword 'Alert' in javascript","To display the popup",["to show the window","to show the screen","To display the popup"]);
var question7 = new Quiz("why we are using keyword 'Prompt' in javascript","For user Input",["For Display the message","For user Input","For print the value"]);
var question8 = new Quiz("how to compare two values?","===",["=","+=","===","-="]);
var question9 = new Quiz("What sign is good for greater values",">",["<",">",">=","<="]);
var question10 = new Quiz("What sign is good for leaste values","<",["<",">",">=","<="]);
var question11 = new Quiz("!= sign is user for?","not equal to",["equal to","not equal to","greater than"]);
var question12 = new Quiz("OR operator is","||",["$$","||","&&","%%"]);
var question13= new Quiz("AND operator is?","&&",["$$","||","&&","%%"]);
var question14 = new Quiz("How many indexs in the following values 'Ali,Kamaran,Salman,Nabeel'","3",["2","3","4","0"]);
var question15 = new Quiz("why we use 'pop' keyword?","For delete the last index",["For Delete the Value","For delete the Value of First Index","For delete the last index"]);
var question16 = new Quiz("Why we Use 'Push' Keyword?","For Add Value In the Last Of index",["For Add the value in the Start Of index","For Add Value In the Last Of index","For Add Value In the Middle Of index"]);
var question17 = new Quiz("Why we Use 'Shift' Keyword?","For Remove the Value For First Index",["For Remove the Value From First Index","For Remove the Value From last Index","For Remove the Value"]);
var question18 = new Quiz("Why We use 'Unshift' Keyword?","For Add the Value In the Start Of Index",["For Add the Value In the Start Of Index","For Add the Value In the Last Of Index","For Add the Value In the Index"]);
var question19 = new Quiz("Why we use 'Math.Round' keyword?","For Rounding the value",["For Rounding the value","For rounding the Object","For rounding the Data"]);
var question20 = new Quiz("How To make A Object?","[]",["()","{}","[]"]);
var question21 = new Quiz("Keyword Which Generate Random number?","Math.Random",["Math.Random","Math.Round","Round.Math"]);
var question22 = new Quiz("Keywor Which  Convert String Into Integer?","Int.parse",["Int.parse","Parse,Int","Interger"]);
var question23 = new Quiz("keyword Which Use To value In Decimal?","Flot.parse",["Float.parse","parse.Float","Floating"]);
var question24 = new Quiz("What is Dom","Document Object Model",['Document Operator Model','Document Object Model','Document Object Moderator'])

var myQuestions = [question1,question24,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,question13,question14,question15,question16,question17,question18,question19,question20,question21,question22,question23,];

var quizDiv = document.getElementById("quiz");

for(var i = 0; i < myQuestions.length; i++){
    var paragraph = document.createElement("p");
    paragraph.innerText = "Q" + (i + 1) + ". " + myQuestions[i].questions;
    quizDiv.appendChild(paragraph);

for (var j = 0; j < myQuestions[i].option.length; j++){
    var radio = document.createElement("input");
    radio.setAttribute("type","radio");
    radio.setAttribute("name",i);
    radio.setAttribute("value", myQuestions[i].option[j]);
    quizDiv.appendChild(radio);
    var text = document.createTextNode(myQuestions[i].option[j]);
    quizDiv.appendChild(text);
}
}
var submit = document.createElement("button");
submit.innerText = "Submit your quiz!";
submit.setAttribute("onclick", "checkAnswers()");
submit.setAttribute("class","submitt")

quizDiv.appendChild(submit);

function checkAnswers(){
    var allRadios = document.getElementsByTagName("input");
    var result = 0;

    for(var i = 0; i < allRadios.length; i++){
        if(allRadios[i].checked){
            console.log(allRadios[i].value, 'allRadios[i].value');
            console.log(allRadios[i].name, 'allRadios[i].names');
            var index = allRadios[i].name;
            console.log(myQuestions[index].answer == allRadios[i].value);
            if(myQuestions[index].answer == allRadios[i].value){
                result++;
            }
        }
    }
    result = result / myQuestions.length * 100;
    document.write("Your result is: " + result + '%');
}