"use strict"

let resultsArray = [];
let workingLength = 0;

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");

// var num = 15;
// var n = num.toString();

$(document).ready(function(){
//variables
  let firstNumber = "";
  let secondNumber = "";
  let operator = "";
  let result = "";
  let resultString = "";
  const equals = "=";
//clear function
    const clear = function (){
        firstNumber = "";
        secondNumber = "";
        operator = "";
        result = ""; 
        resultString = ""; 
        $("#first-number").empty();
        $("#operator").empty();
        $("#second-number").empty();
        $("#equals").empty();
        $("#result").empty();
    }
    $("#button-clear").click(clear);
//number function
$(".number").click(function () {
    console.log(operator);
    if (operator === "") {
        firstNumber += $(this).val();
        console.log(firstNumber);
        resultString = firstNumber;
        $("#first-number").text(firstNumber);
    } else {
        secondNumber += $(this).val();
        console.log(secondNumber);
        resultString = resultString + " " + secondNumber;
        $("#second-number").text(secondNumber);
    }
});
//operator function
    $(".operator").click(function () {
        operator = $(this).text();
        console.log(operator);
        resultString = resultString + " " + operator;
        $("#operator").text(operator);
    });
//Calculator
$("#button-equal").click(function () {
    console.log("operator ", operator)
    $("#equals").text(equals);
    if (operator === "+"){
        result = parseInt(firstNumber) + parseInt(secondNumber);
        resultString = resultString + " = " + result;
        $("#result").text(result);
    } else if(operator === "-") {
        result = parseInt(firstNumber) - parseInt(secondNumber);
        resultString = resultString + " = " + result;
        $("#result").text(result);
    } else if(operator === "*") {
        result = parseInt(firstNumber) * parseInt(secondNumber);
        resultString = resultString + " = " + result;
        $("#result").text(result);
    } else if(operator === "/"){
        result = parseInt(firstNumber) / parseInt(secondNumber);
        resultString = resultString + " = " + result;
        $("#result").text(result);
    } else if(operator === "^"){
        result = Math.pow(parseInt(firstNumber), parseInt(secondNumber));
        resultString = resultString + " = " + result;
        $("#result").text(result);
    };
    resultsArray.push(resultString);

    $("#results").empty();

// 10 results maximum
    if (resultsArray.length < 10 ) {
        workingLength = resultsArray.length;
    } else {
        workingLength = 10;
    };

    let index = 0;
    for (let i = 0; i < workingLength; i++) {
        index = resultsArray.length - 1 - i;
        let list = $("<div>");
        let listItem = $("<p>").text(resultsArray[index]);
        // Displaying the rating
        list.append(listItem);
        $("#results").append(list);
    };


});

 
});

