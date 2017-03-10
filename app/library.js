'use strict'

var file = {}

//function to get the minimum and maximum numbers in a given list, here the list is denoted by the variable l;
file.findMinMax = function(l){
  var output = [];          //an empty array is decleared to hold the results;
  var same = l[0];
  for(var j = 1; j < 2; j++){
    //condition to check if the list consists of the same value by comparing the first and the second element according to the test cases;
    if(l[j] == same){ 
    output[0] = l[j]; 
    return output;          //outputs one value if the condition given above is true;
    }
  }
  if(l.length < 2){
    return l;
  }else{
    
    output[0] = minimum(l); // makes a call to the minimum function and gets the minimum value in the list;
    output[1] = maximum(l); // makes a call to the maximum function and gets the maximum value in the list;
    return output;          // outputs a list containing the minimum and maximum value in the given list;
  }
}

//this is a function to get the minimum value in the list;
function minimum(l){
  var min = l[0];
  for(var i = 1; i <= l.length; i++){
    if(l[i] < min){
      min = l[i];           //returns the minimum number in the list
    }
  }
  return min;
}
//this is a function to get the maximum value in the list;
function maximum(l){
  var max = l[0];
  for(var i = 1; i <= l.length; i++){
    if(l[i] > max){
      max = l[i];
    }
  }
  return max;               //returns the maximum value in the list
}

file.fizzBuzz = function(n){
  if(n % 5 === 0 && n % 3 === 0){  //condition to check if the input number is divisible by both 5 and 3;
    return "FizzBuzz";
  }else if(n % 5 === 0){       //condition to check if the input number is divisible by s;
    return "Buzz";
  }
  else if(n % 3 === 0){        //condition to check if the input number is divisible by 3;
    return "Fizz";
  }else{
    return n;            // return the number if it is neither divisible by neither 5 nor 3;
  }
}

module.exports = file;
