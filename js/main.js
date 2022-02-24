//make the navBtn and its functions--need to use doc.getelebyid cause its in my html-i think
//make the function to make it go
//use eventlistener for it to go to page2 when clicked
const navBtn = document.getElementById("navBtn");
    function init() {
        nextBtn.removeEventListener('click', '');
        navBtn.addEventListener('click', pg1);
    }



//create functions for each page with what they have on them and what they dont
function pg1() {
    document.getElementById("headerText").innerHTML = "I can read your mind";
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
    //document.getElementById("scroller").innerHTML ='none';
    document.getElementById("navBtn").innerHTML = "NO";
    document.getElementById("nextBtn").style.display = 'block';
    document.getElementById("smallText").innerHTML = "Ex: 14 - 5 - 9 click next to proceed";

    //nextBtn.removeEventListener('click', pg2, pg3, pg4, pg6);
    nextBtn.addEventListener('click', pg5,{once:true});
    navBtn.addEventListener('click', pg1);
};

function pg5() {
    //display the choices in a scrolling format and 
    document.getElementById("headerText").innerHTML = ["0-!", "1-$", "2-&", "3-#", "4-@", "5-*"];
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
    document.getElementById("headerText").innerHTML = "lorem ipsum";
    //document.getElementById("scroller").innerHTML ='none';
    document.getElementById("navBtn").innerHTML = "NO";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("smallText").innerHTML = "Your symbol is: lorem ipsum";
    
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
