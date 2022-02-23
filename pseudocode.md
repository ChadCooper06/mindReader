PROCEDURES

**PAGE 1

Header box with text in it (changes with each page)

go to next page
  *nav button*
  
**PAGE 2

Header box with text in it

Click to continue(Next)
  *big button*
  
Small text box with additional instructions

reset to page one
  *nav button*
 
**PAGE 3

Header box with text in it

Click to continue(Next)
  *big button*
  
Small text box with additional instructions

reset to page one
  *nav button*
  
  
**PAGE 4

Header box with text in it

Click to continue(Next)
  *big button*
  
Small text box with additional instructions

reset to page one
  *nav button*

**PAGE 5

Header box with scrolling menu (__IF__ PAGE 5 have this, __ELSE__ have the normal view)-or make it all the same and just dont have enough space in others to be able to scroll

Click to continue(Next)
  *big button*
  
Small text box with additional instructions

reset to page one
  *nav button*

**PAGE 6

Header box with text in it

  
Small text box with additional instructions

reset to page one
  *nav button*



Maybe use same layout on each page and just hide some things on each page


FUNCTIONS

event listeners for onclick of each button type
* nav button goes to 2nd page __if__ on first, __else__ returns to first page (says go on first page but uses restart symbol on every other page)
* next button goes to next page (only visible on pages 2-5)
* scrolling text only functional on page 5
* math equation that determines the outcome of the choices
* some way to pop off the last used symbol until all are popped and then add them all back in

function navButton(){

}

function scrollText() { 

}

function bigButton() {

}

function mindReaderEquation() {

}

1. eventListener for navButton on first page to go to 2nd
1.5 eventListener for navButton on every other page to go back to first page
2. eventListener for bigButton to go to next page
3. eventListener for scrolling maybe?


OBJECTS

* div container for page
* div container for header text area-possibly scrolling area only
* div container for bigButton
* div container for smallText and navButton together or ...
* div container for navButton



Class Page{
  headerText:
  navButton:
  smallText:
  bigButton:
  scrollText:
}

Class Page1{
  headerText:
  navButton:
  smallText:
}

Class Page2{
  headerText:
  navButton:
  smallText:
  bigButton:
}

Class Page3{
  headerText:
  navButton:
  smallText:
  bigButton:
}

Class Page4{
  headerText:
  navButton:
  smallText:
  bigButton:
}

Class Page5{
  scrollText:
  navButton:
  smallText:
  bigButton:
}

Class Page6{
  headerText:
  navButton:
  smallText:
}
  
