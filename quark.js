/*
George Thompson
5/17/22
Assignment: The Building Blocks for your Space Base - Functions
*/


function play() {      // creates and defines the play function 
    var die1 = Math.floor(Math.random() * 6) + 1; // creates a random number between 1-6 and defines it as  variable die 1
    var die2 = Math.floor(Math.random() * 6) +1; // creates a random number between 1-6 and defines as variable die 2
    
    var sum = die1+die2 // creates the variable sum which is the combination of variables die 1 and 2

    document.write("Die 1 = " + die1) ; // writes to the html page the results of die 1
    document.write("<br/>"); // line break
    document.write("Die 2 = " + die2) ; //writes to the html page the results of die 2
    document.write("<br/>"); // line break
    document.write("Sum = " + sum); // writes to the html page the results of sum
    document.write("<br/>"); // line break
    if (sum == 7 || sum == 11) // creates an if condition that if sum equals 7 or 11
    { document.write("CRAPS - you lose"); // writes to the html page craps you lose
    document.write("<br/>"); // line break
    } // closes the if condition
    else if (die1== die2 && die1%2 == 0) // creates a else condition if die 1 and die 2 land on the same number and is even
    { 
    document.write("DOUBLES - you win"); // writes to the html page doubles you win
    document.write("<br/>"); // line break
    } // closes the else condition
    
    } // closes the play function
    document.write("Simple Craps"); // writes to the html page simple craps
    document.write("<br/>"); // line break
    play() // runs the play function
    


function newFunction() {
    style = "color:white";
}
    