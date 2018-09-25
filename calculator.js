"use strict"

let resultsArray = [];

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");

$(document).ready(function(){
//variables
  let firstNumber = "";
  let secondNumber = "";
  let operator = "";
  let result = "";
  let resultString = "";
//clear function
    const clear = function (){
        firstNumber = "";
        secondNumber = "";
        operator = "";
        result = "";  
        $("#first-number").empty();
        $("#operator").empty();
        $("#second-number").empty();
        $("#result").empty();
    }
    $("#button-clear").click(clear);
//number function
$(".number").click(function () {
    console.log(operator);
    if (operator === "") {
        firstNumber += $(this).val();
        console.log(firstNumber);
        $("#first-number").text(firstNumber);
    } else {
        secondNumber += $(this).val();
        console.log(secondNumber);
        $("#second-number").text(secondNumber);
    }
});
//operator function
    $(".operator").click(function () {
        operator = $(this).text();
        console.log(operator);
        $("#operator").text(operator);
    });
//Calculator
$("#button-equal").click(function () {
    console.log("operator ", operator)
    if (operator === "+"){
        result = parseInt(firstNumber) + parseInt(secondNumber);
        $("#result").text(result);
    } else if(operator === "-") {
        result = parseInt(firstNumber) - parseInt(secondNumber);
        $("#result").text(result);
    } else if(operator === "*") {
        result = parseInt(firstNumber) * parseInt(secondNumber);
        $("#result").text(result);
    } else if(operator === "/"){
        result = parseInt(firstNumber) / parseInt(secondNumber);
        $("#result").text(result);
    } else if(operator === "^"){
        result = Math.pow(parseInt(firstNumber), parseInt(secondNumber));
        $("#result").text(result);
    };
});
 
});
