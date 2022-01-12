
let num1 = '';
let temp = '';
let tempOperator = ''
let display = document.querySelector('.display');
const number = document.querySelectorAll('button.number');
number.forEach((button) => {
  button.addEventListener('click', () => {

    //Edge case for if user presses '=' and starts typing a new number
    //without having pressed an operator
    if (num1 !== '' && tempOperator == '') {
      num1 = '';
    }

    //Displays the number being inputted
    temp += button.innerHTML;
    display.innerHTML = temp;
  });
});

const operator = document.querySelectorAll('button.operator');
operator.forEach((button) => {
  button.addEventListener('click', () => {
    //Prevents operator button without numbers inputted from breaking calculator
    if (temp == '' && num1 == '') {
      return;
    }

    

    //If first number hasn't been initialized yet
    else if (num1 == '') {
      num1 = temp; 
      temp = '';
      tempOperator = button.innerHTML;
    }

    //If equal button used, then need to initialize next operator
    //Or to change operator before second number initialized
    else if (temp == '') {
      tempOperator = button.innerHTML;
    }

    //Calculates result after both numbers have been initialized
    //User can press any operator to calc current two numbers
    //Also uses the operator pressed to be used for the next calc
    else {
      num1 = operate(num1, tempOperator, temp);
      temp = '';
      tempOperator = button.innerHTML;
      
      console.log(num1);
    }
      
    
    
  });
});

const equal = document.querySelector('button#equal');
equal.addEventListener('click', () => {
  //Edge case for not having all three components for calculation
  if (temp == '' || tempOperator == '') {
    return;
  }
  else {
  num1 = operate(num1, tempOperator, temp);
  tempOperator = '';
  temp = '';
  }
});

const operation = document.querySelectorAll('button.operation');
operation.forEach((button) => {
  button.addEventListener('click', () => {
    if (num1 == '' && temp == '') {
      return;
    }
    else if (temp == '') {
      num1 = operate(num1, button.innerHTML);
    }
    else {
      temp = operate(temp, button.innerHTML);
    }
    

  });
});

//Deletes number the display number
const clearEntry = document.querySelector('button#CE'); 
clearEntry.addEventListener('click', () => {

  //Edge case for pressing '=' then clearing that calculation
  if (tempOperator == '' && num1 !== '') {
    num1 = '';
    display.innerHTML = num1;
  }
  else {
  temp = '';
  display.innerHTML = temp;
  }
});

//Clears everything
const clearAll = document.querySelector('button#C');
clearAll.addEventListener('click', () => {
  temp = '';
  num1 = '';
  tempOperator = '';
  display.innerHTML = temp;
});

//Deletes last number in display
const backspace = document.querySelector('button#backspace');
backspace.addEventListener('click', () => {
  temp = temp.slice(0, -1);
  display.innerHTML = temp;
  console.log(temp);
});




const operate = function(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let result;
  switch (operator) {
    case "/":
      result = divide(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "+":
      result = add(num1, num2);
      break;
    case "1/x":
      result = inverse(num1);
      break;
    case "x^2":
      result = squared(num1);
      break;
    case "√x":
      result = squareroot(num1);
      break;
    case "+/-":
      result = opposite(num1);
      break;
  }
  
  display.innerHTML = result;
  return result;
}



const add = function(num1, num2) {
  return num1 + num2;
}

const subtract = function(num1, num2) {
  return num1 - num2;
}

const multiply = function(num1, num2) {
  return num1 * num2;
}

const divide = function(num1, num2) {
  if (num2 == 0) {
    return alert('You cannot divide by zero');
  }
  return num1 / num2;
}

const inverse = function(num1) {
  return 1 / num1;
}

const squared = function(num1) {
  return num1 ** 2;
}

const squareroot = function(num1) {
  return Math.sqrt(num1);
}

const opposite = function(num1) {
  return num1 * -1;
}