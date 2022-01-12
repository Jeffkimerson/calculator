
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
      num1 = operate(num1, temp, tempOperator);
      
      tempOperator = button.innerHTML;
      
      console.log(num1);
    }
      
    
    
  })
})

const equal = document.querySelector('button#equal');
equal.addEventListener('click', () => {
  //Edge case for not having all three components for calculation
  if (temp == '' || tempOperator == '') {
    return;
  }
  else {
  num1 = operate(num1, temp, tempOperator);
  tempOperator = '';
  }
})

const operation = document.querySelectorAll('button.operation');
operation.forEach((button) => {
  button.addEventListener('click', () => {
    let temp = button.innerHTML;
    console.log(temp);
  })
})


const operate = function(num1, num2, operator) {
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
  }
  display.innerHTML = result;
  temp = '';
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