//alert("hii");

let questions=[];

var start=0;


//INITIAL SCORE//
var userScore=0;
var correctAnswer="";




//ADD THE QUESTION
function addQuestion(title,options,correctAnswer,score)
{
    questions.push({
        title:title,
        options:options,
        correctAnswer:correctAnswer,
        score:score
    })  
}


//QUESTIONS
addQuestion("What is the number of edges present in a complete graph having n vertices?",["(n*(n+1))/2","(n*(n-1))/2","n","Information given is insufficient"],"(n*(n-1))/2",1);
addQuestion("If we want define style for an unique element, then which css selector will we use ?",["id","float","class","query"],"id",1);
addQuestion("If we want to wrap a block of text around an image, which css property will we use ?",["wrap","float","push","align"],"float",1);
addQuestion("What does CSS stand for?",["colourfull style sheets","creative style sheets","cascading style sheets","computer style sheets"],"cascading style sheets",1);
addQuestion("Which of the following is not considered as an error in JavaScript?",["Syntax error","Missing of semicolons","Division by zero","Missing of Bracket"],"Division by zero",1);
addQuestion("The statement a===b refers to?",[" Both a and b are equal in value, type and reference address","Both a and b are equal in value","Both a and b are equal in value and type","There is no such statement"],"Both a and b are equal in value and type",1);
addQuestion("Which of these can not be used for a variable name in Java?",["identifier","keyword","identifier & keyword","none of the mentioned"],"keyword",1);
addQuestion("Which of these can be returned by the operator &?",["Integer","Boolean","Character","Integer or Boolean"],"Integer or Boolean",1);


addQuestion("Which of these operators is used to allocate memory to array variable in Java?",["malloc","alloc","new","new malloc"],"new",1);
addQuestion("Which of these is an incorrect array declaration?",["int arr[] = new int[5]","int [] arr = new int[5]"," int arr[] = new int[5]","int arr[] = int [5] new"],"int arr[] = int [5] new",1);





//window.onload=function ()
//{
////    document.getElementById("questioncontainer").style.display="none";
//          document.getElementById("answerkeycontainer").style.display="none";
//    correctAnswer=questions[start].correctAnswer;
//    var options=document.getElementsByClassName("optionLabel");
//    var inputOptions=document.getElementsByClassName("option");
//    document.getElementById("question").innerHTML=questions[start].title;
//     for(let j=1;j<=4;++j)
//        {
//          options[j].innerHTML=questions[start].options[j-1];
//            inputOptions[j].setAttribute("value",questions[start].options[j-1]);
//        }
//}


function initialCalling()
{
    
    //condition///
    if(start<questions.length)
        {
            
     document.getElementById("correctanswer").style.display="none"; 
    document.getElementById("incorrectanswer").style.display="none";
    
   document.getElementById("submitbutton").style.display="inline-block"; 
    document.getElementById("nextquestionbutton").style.display="none";
    
    
    correctAnswer=questions[start].correctAnswer;
    var options=document.getElementsByClassName("optionLabel");
    var inputOptions=document.getElementsByClassName("option");
    inputOptions[0].checked=true;
    document.getElementById("question").innerHTML=questions[start].title;
     for(let j=1;j<=4;++j)
        {
            options[j].innerHTML=questions[start].options[j-1];
            inputOptions[j].setAttribute("value",questions[start].options[j-1]);
            inputOptions[j].disabled=false;
        }
        }
    //answer display//
    
    else{
//        alert(document.getElementsByClassName("questionContainer"));
        let res="<ul>";
        for(let p=0;p<questions.length;++p)
            {
              res+="<li class='individualanswer'>"+questions[p].title+" - <span class='badge badge-success' style='padding:4px'>"+questions[p].correctAnswer+"<span></li>";
            }
        res+="</ul>";
//        alert(res);
        document.getElementById("answerkeycontainer").style.display="block";
        document.getElementById("answerkey").innerHTML=res;
        //disable the questions block//
        
        document.getElementsByClassName("questionContainer")[0].style.display="none";
        
        //show the  score in the heading//
       
        
        document.getElementById("headingandscore").innerHTML="Score: "+userScore;
    }
}



//initial calling on  loading of script//
initialCalling();





function checkAnswer()
{
    //get the value of the radio//
    var userAnswer=document.querySelector('input[name="option"]:checked').value;
    
    
    //no option selection checking//
       if(userAnswer==="default")
        {
        alert("Please select an option");
        return;
        }
    
    
    //get all the options//
    var disableOptions=document.getElementsByClassName("option");
    
    
    for(let j=0;j<disableOptions.length;++j)
        {
            //disabling the options//
            disableOptions[j].disabled=true;
        }
    
           //hide the submit button//
           document.getElementById("submitbutton").style.display="none"; 
    
           //show the next button//
           document.getElementById("nextquestionbutton").style.display="inline-block";
    
    //consdtion for answer checking//
         if(userAnswer===correctAnswer)
           {
               //increment the score//
              userScore+=questions[start].score;
               //show the correct block//
              document.getElementById("correctanswer").style.display="block"; 
           }  
    
    else{
        //show the incorrect block//
         document.getElementById("incorrectanswer").style.display="block"; 
        }
}




//shift to the nextQuestion//
function nextQuestion()
{
    start++;
    initialCalling();  
}


//for start reload the script//
function restart()
{
    alert();
    location.reload();
}

 



           


