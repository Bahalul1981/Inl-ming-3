
// Ändra  display (kopplad me css)
function changemode() {
    var element = document.body;
    element.classList.toggle("black");
 }

// Här är alla mina objekt som ligger i array

const myQuize=[
{
    Question: "Vilket land Pasta kom ifrån",
        a:"China",
        b:"Italien",
        c:"India",
    correctAnswer:"false2"
},
{
    Question:"Vilket land Pizza kom ifrån",
    
        a:"USA",
        b:"Tyskland",
        c:"Italien",
   
    correctAnswer:"false3"
},
{
    Question: "Vilket land Tikka masala kom ifrån",
    
        a:"Brazil",
        b:"Afganistan",
        c:"India",
    
    correctAnswer:"false3"
},
{
    Question: "Vilket land Paella kom ifrån",
    
        a:"Purtugal",
        b:"Thailand",
        c:"Spanien",
    
    correctAnswer:"false3"
},
{
    Question: "Vilket land Som tam kom ifrån",
   
        a:"Malaysia",
        b:"Thailand",
        c:"Indonasia",
    
    correctAnswer:"false2"
},
{
    Question: "Vilket land Tacos kom ifrån",
    
        a:"Spanien",
        b:"Italien",
        c:"Mexico",
   
    correctAnswer:"false3"
},
{
    Question: "Vilket land Köttbullar kom ifrån",
   
        a:"Iran",
        b:"Sverige",
        c:"Australien",
   
    correctAnswer:"false2"
},
{
    Question: "Vilket land French tost kom ifrån",
    
        a:"Hong Kong",
        b:"Usa",
        c:"Finland",
   
    correctAnswer:"true1"
},
{
    Question: "Vilket land Hummus kom ifrån",
    
        a:"Egypt",
        b:"Middle east",
        c:"Turkiet",
   
    correctAnswer:"false2"
},
{
    Question: "Vilket land Burger kom ifrån",
   
        a:"Tysklan",
        b:"Japan",
        c:"Usa",
   
    correctAnswer:"false3"
},

]

// Jag har valts ut alla knappar/radio button/h2 från HTML och ska ändra detta i DOM

let questions=document.getElementById("question1")
let myFirstOption= document.getElementById("option1")
let mySecondOption= document.getElementById("option2")
let myThirdOption=document.getElementById("option3")
let mySubmit= document.querySelector(".submit")
let answerButton= document.querySelectorAll(".amin")
let myShowScore=document.getElementById("showScore")
let refreshButton= document.getElementById("refrash")



//Här skapat jag varriable och function för att byta h2 text och radio button i DOM
let allQuestions=0;
// Varrible för räkna score
let score=0;
let callQuestion=()=>{
    let questionslist=myQuize[allQuestions];
    questions.innerText=questionslist.Question;
    myFirstOption.innerText=questionslist.a;
    mySecondOption.innerText=questionslist.b;
    myThirdOption.innerText=questionslist.c;
}
callQuestion();

// Function för reda ut vilken dario button användaren har valts koppla till correctanswe

const checkTheAnswe=()=>{
    let userAnswe;

    answerButton.forEach((element) => {
        if(element.checked){
            userAnswe=element.id;
        }
     });
    return userAnswe
};
//Valda button kommer försvinna till nästa frågan
let removeButton=()=>{
    answerButton.forEach((element) =>element.checked=false);
}


// Om tricka på Nästa button ,hämta resultat och visa status

mySubmit.addEventListener('click',()=>{
    const checkButton= checkTheAnswe();
    

    if(checkButton==myQuize[allQuestions].correctAnswer){

     // Här forsökte jag köra med "G" betyg först.

        // myShowScore.innerHTML="Rätt svar"
        // myShowScore.style.color="green"
    score++
    };
     
    // Här forsökte jag köra med "G" betyg först.
    
        // if(checkButton!==myQuize[allQuestions].correctAnswer){
        //     myShowScore.style.color="red"
        //     myShowScore.innerHTML="Fel svar"
        // }
     
    // Här kommer nästa fråga
    allQuestions++;

    //(Häta tillbacka funktionen) Valda radio button kommer försvinna till nästa frågan
    removeButton();

    // (Häta tillbacka funktionen) som jag deklarerat 
    if (allQuestions<myQuize.length){
    callQuestion();
    }
            
    // if-satsen för ändra färg i resultat
 
        if(allQuestions>=10 && score>7.5){
            myShowScore.innerHTML =`
            <h2>Din totala poäng är ${score} av ${myQuize.length}</h2>
            `;
            myShowScore.style.color="green"

        }
        else if(allQuestions>=10 && score>5){
            myShowScore.innerHTML =`
            <h2>Din totala poäng är ${score} av ${myQuize.length}</h2>
            `;
            myShowScore.style.color="orange"
        }
        else if(allQuestions>=10 && score<=5) {
            myShowScore.innerHTML =`
            <h2>Din totala poäng är ${score} av ${myQuize.length}</h2>
            `;
            myShowScore.style.color="black"
        }
    // För spela igen

    refreshButton.addEventListener("click", ()=>{
    location.reload();
    });

});










































