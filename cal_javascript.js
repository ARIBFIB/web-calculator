let currentOperation = ''
let currentResult = ''

const numberButtons = document.querySelectorAll('[data-number]')
const currentOperationScreen = document.getElementById('currentOperationScreen')
const operatorButton = document.querySelectorAll('[data-operator]')
const resultScreen = document.getElementById('Result')
const equalsButton = document.getElementById('equalsBtn')
const clearButton = document.getElementById('clearBtn')
const deleteButton = document.getElementById('deleteBtn')
const pointButton = document.getElementById('pointBtn')
const answerButton = document.getElementById('ansBtn')
const ten_toRaisePowerButton = document.getElementById('TentoPower')



window.addEventListener('keydown',handleKeyboardInput)
equalsButton.addEventListener('click',calulate)
clearButton.addEventListener('click',clear)
deleteButton.addEventListener('click', deleteLastNumber)
pointButton.addEventListener('click', appendPoint)
answerButton.addEventListener('click',  () => appendNumber(currentResult))
ten_toRaisePowerButton.addEventListener('click', tenToPower)

numberButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
        appendNumber(button.textContent)
    }); 
});

operatorButton.forEach((button) => {
    button.addEventListener('click', function (e) {
        appendOperator(button.textContent)
    });
});

function handleKeyboardInput(e){
    if(e.key >= 0 || e.key <=9) return appendNumber(e.key)
    if(e.key === '+' || e.key === '-' || e.key === '÷' || e.key === '-') return appendOperator(e.key)
    if(e.key === '=') return calulate()
    if(e.key === 'AC') return clear()
    if(e.key === '.') return appendPoint()
    if(e.key === 'x 10') return tenToPower()

}

function appendNumber(number){
    if(currentOperationScreen.textContent === '0' || currentResult !== ''){
        currentOperationScreen.textContent = number
        currentResult = ''
    }
    else{
        currentOperationScreen.textContent += number
    }
}
function appendOperator(operator){
    if(currentOperationScreen.textContent !== '0'){
        currentOperationScreen.textContent += `${operator}`
    }
}
function calulate(){
    try {
        currentResult = eval(currentOperationScreen.textContent.replace('X','*').replace('÷','/'))
        resultScreen.textContent = currentResult
    } catch (error) {
        resultScreen.textContent = 'Error';
    }
}

function clear(){
    currentOperationScreen.textContent = '0'
    resultScreen.textContent = ''
}
function deleteLastNumber(){
    currentOperationScreen.textContent = currentOperationScreen.textContent.slice(0,-1) || '0'
}

function appendPoint(){
    if(currentOperationScreen.textContent === '')
        currentOperationScreen.textContent = '0'
    if(currentOperationScreen.textContent.includes('.')) return
    currentOperationScreen.textContent += '.'
}

function tenToPower() {
    if (currentOperationScreen.textContent === '') return;
    let currentNumber = parseFloat(currentOperationScreen.textContent);
    currentOperationScreen.textContent = Math.pow(10, currentNumber);
}

// let firstOperand = '';
// let secondOperand = '';
// let currentOperation = null;
// let shouldResetScreen = false;
// let lastResult = '';


// const numberButtons = document.querySelectorAll('[data-number]')
// const operatorButtons = document.querySelectorAll('[data-operator]')
// const equalsButton = document.getElementById('equalsBtn')
// const pointButton = document.getElementById('pointBtn')
// const clearButton = document.getElementById('clearBtn')
// const deleteButton = document.getElementById('deleteBtn')
// const answerButton = document.getElementById('ansBtn')
// const ten_toRaisePowerButton = document.getElementById('TentoPower')
// const currentOperationScreen = document.getElementById('currentOperationScreen')
// const lastOperationScreen = document.getElementById('lastOperationScreen')



// window.addEventListener('keydown', handleKeyboardInput)
// equalsButton.addEventListener('click',evaluate)
// pointButton.addEventListener('click',appendPoint)
// clearButton.addEventListener('click',clear)
// deleteButton.addEventListener('click',deleteNumber)
// answerButton.addEventListener('click', () => appendNumber(lastResult));
// ten_toRaisePowerButton.addEventListener('click',tenToPower)



// numberButtons.forEach((button) => {
//     button.addEventListener('click', function (e) {
//         appendNumber(button.textContent)
//     });
// });

// operatorButtons.forEach((button) => {
//     button.addEventListener('click', function (e) {
//         setOperation(button.textContent)
//     });
// });

// function appendNumber(number){
//     if(currentOperationScreen.textContent === '0' || shouldResetScreen)
//         resetScreen()
//     currentOperationScreen.textContent += number
// }

// function resetScreen(){
//     currentOperationScreen.textContent = ''
//     shouldResetScreen = false
// }

// function clear(){
//     currentOperationScreen.textContent = '0'
//     lastOperationScreen.textContent = ''
//     firstOperand = ''
//     secondOperand = ''
//     currentOperation = null
// }

// function appendPoint(){
//     if(shouldResetScreen) resetScreen()
//     if(currentOperationScreen.textContent === '')
//         currentOperationScreen.textContent = '0'
//     if(currentOperationScreen.textContent.includes('.')) return
//     currentOperationScreen.textContent += '.'
// }

// function deleteNumber(){
//     currentOperationScreen.textContent = currentOperationScreen.textContent
//     .toString()
//     .slice(0, -1)
//     if (currentOperationScreen.textContent === '') {
//         currentOperationScreen.textContent = '0';
//     }
// }

// function setOperation(operator){
//     if(currentOperation != null)  evaluate()
//         firstOperand = currentOperationScreen.textContent
//     currentOperation = operator
//     lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`
//     shouldResetScreen = true
// }

// function evaluate(){
//     if(currentOperation === null || shouldResetScreen) return
//     if(currentOperation === '/' && currentOperationScreen.textContent === '0'){
//         alert("you can't divide by zero")
//         return
//     }
//     secondOperand = currentOperationScreen.textContent;
//     currentOperationScreen.textContent = roundResult(
//         operate(currentOperation, firstOperand, secondOperand)
//     )
//     lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
//     currentOperation = null
// }

// function roundResult(number){
//     return Math.round(number * 1000)/1000 
// }

// function tenToPower() {
//     if (currentOperationScreen.textContent === '') return;
//     let currentNumber = parseFloat(currentOperationScreen.textContent);
//     currentOperationScreen.textContent = Math.pow(10, currentNumber);
// }


// function handleKeyboardInput(e){
//     if(e.key >= 0 && e.key <=9) appendNumber(e.key)
//     if(e.key === '.') appendPoint()
//     if(e.key === '=' || e.key === 'Enter') evaluate()
//     if(e.key === 'Backspace') deleteNumber()
//     if(e.key === 'Escape') clear()
//     if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
//         setOperation(convertOperator(e.key))
// }

// function convertOperator(keyboardOperator){
//     if(keyboardOperator === '*') return 'X'
//     if(keyboardOperator === '+') return '+'
//     if(keyboardOperator === '-') return '-'
//     if(keyboardOperator === '/') return '÷'
// }

// function add(a,b){
//     return a + b
// }

// function substract(a,b){
//     return a - b
// }

// function divide(a,b){
//     if(b == 0){
//         alert("can not divide by zero")
//         return 
//     }
//     return a / b
// }

// function multiply(a,b){
//     return a * b
// }

// function operate(operator,a,b){
//     a = Number(a)
//     b = Number(b)

//     switch (operator) {
//         case '+':
//             return add(a,b)
//         case '-':
//             return substract(a,b)
//         case 'X':
//             return multiply(a,b)
//         case '÷':
//             try {
//                 if(b === 0){
//                     alert("can not divide by zero")
//                     return null
//                 }
//                 else{
//                     return divide(a,b)
//                 }
//             } catch (error) {
//                 alert("error")
//             }
//         default:
//             return null;
//     }
// }