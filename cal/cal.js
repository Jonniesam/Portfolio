const clear_button = document.getElementById('clear')
const delete_button = document.getElementById('delete')
const equals_button = document.getElementById('equals')
const dot_button = document.getElementById('dot')
const display = document.getElementById('display')
const output = document.getElementById('output')
const digits = document.querySelectorAll('#digits')
const oper = document.querySelectorAll('#oper')


const operators = [];
const array1 = [];
const array2 = [];


function getNum(arr) {
    const join = arr.join('');
    const num = +join;
    return num;
    }

function getOp(op) {
    let last = op.at(-1);
    return last.toString();
    }


function storeVal(e) {
    let check = operators.length >= 1 ? true : false;
if (e === '+' || e === '-' || e === 'x' || e === '/') {
    operators.push(e);
        return operators;
}else if (check === false){
    array1.push(e);
    let firstSet = getNum(array1);
    display.innerHTML= firstSet;
} else if (check === true) {
    array2.push(e);
    let secondSet = getNum(array2);
    display.innerHTML= secondSet;
};
}


equals_button.addEventListener('click', function () {
    let operation = getOp(operators);
    let results = operate(getNum(array1), operation, getNum(array2));
    display.innerHTML = results;
    output.innerHTML = `${results} ${operators.at(-1)}`;
    array1.length= 0;
    array2.length = 0;
    array1.push(results);
});

delete_button.addEventListener('click', function() {
    if (operators.length <= 0) {
        array1.pop();
        display.innerText = array1;
    } else {
        array2.pop();
        display.innerText = array2;
    }
});

clear_button.addEventListener('click', function () {
    array1.length = 0;
    array2.length = 0;
    operators.length = 0;
    display.innerText = 0;
    output.innerText = '';
})

digits.forEach(digit => {
    digit.addEventListener('click', function (e) {
    let val = e.target.innerHTML;
    storeVal(val);
})
})

oper.forEach(ope => {
    ope.addEventListener('click', function(e) {
        let val = e.target.innerHTML;
    if(array1.length >= 1 && array2.length >= 1){
        let operation = getOp(operators);
        storeVal(val);
        let results = operate(getNum(array1), operation, getNum(array2));
        display.innerHTML = results;
        output.innerHTML = `${results} ${operators.at(-1)}`;
        array1.length = 0;
        array2.length = 0;
        array1.push(results);
    } else {
        storeVal(val);
    }
    })
})


function sum (a, b) {
  let num = a + b;
  return num;
}

function sub (a, b) {
    let num = a - b;
    return num;
}

function multi (a, b) {
    let num = a * b;
    return num;
}

function divide (a, b) {
    if(b !==0){
    let num = a / b;
    return num;
} else {
    return "58008"
}
}

function operate (num1, operation, num2){
    if(operation === '+'){
        return sum(num1, num2);
    } else if(operation === '-'){
        return sub(num1, num2);
    } else if(operation ==='x'){
        return multi(num1, num2);
    } else if (operation ==='/'){
        return divide(num1, num2);
} else {
    return 'error';
}
}