//make the navBtn and its functions--need to use doc.getelebyid cause its in my html-i think
//make the function to make it go
//use eventlistener for it to go to page2 when clicked
const navBtn = document.getElementById("navBtn");
    function init() {
        nextBtn.removeEventListener('click', '');
        navBtn.addEventListener('click', pg1);
    }

function hide(id){
    document.getElementById(id).style.display='none';
}

function show(id){
    document.getElementById(id).style.display='block';
}

//create starting symbol that is also the %9 symbol
//let startSymbol = "~";

//create array of symbols

//let mySymbols = ["~", "!", "$", "#", "^", "&", "*", "@", "%", "|"];

//array of numbers

//let yourSymbol = mySymbols[Math.floor(Math.random(num) + mySymbols.length)];
 //  for (let i=0; i<100; i++){
//        if (i===0 || i % (mySymbols.length)) {
//            return mySymbols[0];
//        }
//        return random[i];
//    }


//APPEND CHILD


//create function that pulls a random symbol from the array

//function randomSymbol(){
  //  for (let i=0; i<=symbols.length, i++) {
   //     return 
   // }
//}

//create functions for each page with what they have on them and what they dont
function pg1() {
    document.getElementById("headerText").innerHTML = "I can read your mind";
    hide("scroller");
    //document.getElementById("scroller").innerHTML ='none';
    document.getElementById("navBtn").innerHTML = "GO";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("smallText").innerHTML = "";

    navBtn.removeEventListener('click', pg1);
    navBtn.addEventListener('click', pg2);
    
};
pg1();

function pg2() {
    document.getElementById("headerText").innerHTML = "Choose a number between 01-99";
    hide("scroller");
    //document.getElementById("scroller").innerHTML ='none';
    document.getElementById("navBtn").innerHTML = "NO";
    document.getElementById("nextBtn").style.display = 'block';
    document.getElementById("smallText").innerHTML = "When you have your number click next";

    //nextBtn.removeEventListener('click', pg2, pg4, pg5, pg6);
    nextBtn.addEventListener('click', pg3, {once:true}); 
    navBtn.addEventListener('click', pg1);
};

function pg3() {
    document.getElementById("headerText").innerHTML = "Add both digits together to get a new number";
    hide("scroller");
    //document.getElementById("scroller").innerHTML ='none';
    document.getElementById("navBtn").innerHTML = "NO";
    document.getElementById("nextBtn").style.display = 'block';
    document.getElementById("smallText").innerHTML = "Ex: 14 is 1 + 4 = 5 click next to proceed";

    //nextBtn.removeEventListener('click', pg2, pg3, pg5, pg6);
    nextBtn.addEventListener('click', pg4, {once:true});
    navBtn.addEventListener('click', pg1);
};

function pg4() {
    document.getElementById("headerText").innerHTML = "Subtract your new number from the original number";
    hide("scroller");
    //document.getElementById("scroller").innerHTML ='none';
    document.getElementById("navBtn").innerHTML = "NO";
    document.getElementById("nextBtn").style.display = 'block';
    document.getElementById("smallText").innerHTML = "Ex: 14 - 5 - 9 click next to proceed";

    //nextBtn.removeEventListener('click', pg2, pg3, pg4, pg6);
    nextBtn.addEventListener('click', pg5,{once:true});
    navBtn.addEventListener('click', pg1);
};



//global variables
//let scroll document.getelbyid
let scroll = document.getElementById("scroll");
//function that creates the scrollbar

    //array of symbols
let mySymbols = ["~", "!", "$", "#", "^", "&", "*", "@", "%"];

//let symbol=mysymbols[i%9]
var tempSymbol = null;
    

//scroll.append(li)
function symbolOptions() {
    
    scroll.innerHTML = "";
    for (let i=0; i<100; i++) {
        let symbol = mySymbols[i % 9];
        var currentSymbol = symbol;
        if (i % 9===0 ){
            if(tempSymbol == null){
                tempSymbol = symbol;
                currentSymbol = tempSymbol;
            }
        }
        //
        const listItem = document.createElement("li");
        listItem.textContent = `${i} - ${currentSymbol}`;
        scroll.appendChild(listItem);
    }
        //let num = "";
        /*for (let i=0; i<100; i++){
        
        }*/

}





function pg5() {
    document.getElementById("headerText").innerHTML = "";
    //display the choices in a scrolling format
    //call function
    symbolOptions()
    show("scroller");
    
    //document.getElementById("scroller").innerHTML ='block';
    document.getElementById("navBtn").innerHTML = "NO";
    document.getElementById("nextBtn").style.display = 'block';
    document.getElementById("smallText").innerHTML = "Find your new number. Note the symbol beside the number";
    
    //nextBtn.removeEventListener('click', pg2, pg3, pg4, pg5);
    nextBtn.addEventListener('click', pg6, {once:true});
    navBtn.addEventListener('click', pg1);
};


function pg6() {
    
    //return the result of a function that mathematically determines the symbol that is shown
    let stuff = tempSymbol;
    document.getElementById("headerText").innerText = stuff;
    hide("scroller");
    //document.getElementById("scroller").innerHTML ='none';
    document.getElementById("navBtn").innerHTML = "NO";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("smallText").innerHTML = `Your symbol is: ${stuff}`;
    
    nextBtn.removeEventListener('click', pg2, pg3, pg4, pg5, pg6, {once:true});
    navBtn.addEventListener('click', pg1);
};



//function scroller(){

//}

//function restart() {
  //  navBtn.addEventListener('click', init);   
//}


















/*function hideButton(){
    document.getElementById(next);
    if (Page === pg1 || Page === pg6){
        style.display='null';
    }
} 
function showButton(){
    document.getElementById(next);
    if (Page !== pg1 || Page !== pg6){
    style.display='block';
    }
}

switch (new Page().getPage()) {
    case 0:
        headerText= "I will read your mind";
        bigButton= null;
        smallText= null;
        navButton= "GO"
        break;
    case 1:
        headerText= "Pick a number from 01-99";
        bigButton= ''
    
    
}*/