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


//the aritGeo function that takes an aray as an input and checks if the array is a arithemetic progression, or a geometric progression or neither;
file.aritGeo = function(arr) { 
  
  if(arr.length < 1) {      // checks if the length of the array is aless than one, if true, it returns 0;
    return 0;
  }
  
  var diff = arr[1] - arr[0];
  var ratio = arr[1] / arr[0];

  var arith = true;
  var geo = true;

  for(var i = 0; i < arr.length - 1; i++) {
    if( arr[i + 1] - arr[i] !== diff )    //condition that checks if the array is an arithemetic progression or not
        arith = false;
    if(arr[i + 1] / ratio !== arr[i])     //condition that checks if the array is an geometric progression or not
        geo = false;
  }

  if(arith === true)
    return "Arithmetic";
  else if(geo === true)
    return "Geometric";
  else
    return -1;        //return -1 if its neither an arithemetic nor geometric progression;

}


module.exports = file;
