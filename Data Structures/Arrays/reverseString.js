//Reverse a given string.

function reverseAString(str) {

  //Check input
  if(!str || str.length < 2 || typeof str !== 'string'){
    console.log('Please input a string with more than 1 character...');
  }

  //Function
  else{

  let myArray = [];
  let length = str.length-1;
  
  for(let i = length; i>=0; i--){ 
    myArray.push(str[i]); 
  }
    
  console.log(myArray.join('')); //Or we can use .toString
    
  }
}

function reverseAString2(str) {
  console.log(str.split('').reverse().join(''));
}

const reverseAString3 = str => console.log(str.split('').reverse().join(''));

const reverseAString4 = str => console.log([...str].reverse().join('')); //Spread operator separates the string characters into separate items.

reverseAString('Hola me llamo Frank');
