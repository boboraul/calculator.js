const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
	// Replace current display value if first value is entered
	const displayValue = calculatorDisplay.textContent;
	calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}

function addDecimal() {
	// If no decimal, add one
	if (!calculatorDisplay.textContent.includes('.')) {
		calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
	}
}

function useOperator(operator) {
	const currentValue = Number(calculatorDisplay.textContent);
	// Assign firstValue if no value
	if (!firstValue) {
		firstValue = currentValue;
	} else {
		console.log('currentValue', currentValue);
	}
	// Ready for next value, store operator
	awaitingNextValue = true;
	operatorValue = operator;
	console.log('first value:', firstValue);
	console.log('operator', operatorValue);
}

// Ad event listener for numbers, operators, decimal btns
inputBtns.forEach((inputBtn) => {
	if (inputBtn.classList.length === 0) {
		inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
	} else if (inputBtn.classList.contains('operator')) {
		inputBtn.addEventListener('click', () => useOperator(inputBtn.value));

	} else if (inputBtn.classList.contains('decimal')) {
		inputBtn.addEventListener('click', () => addDecimal());
		
	}
});

// Reset all values, display
function resetAll() {	
	calculatorDisplay.textContent = '0';
	firstValue = 0;
	operatorValue = '';
	awaitingNextValue = false;			
}

clearBtn.addEventListener('click', resetAll);
