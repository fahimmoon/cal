/**
 * Complete Working Calculator Implementation
 * This is a single-file version to ensure everything works
 */

class SimpleCalculator {
    constructor() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.waitingForNewOperand = false;
        
        this.display = document.getElementById('mainDisplay');
        this.history = document.getElementById('calculationHistory');
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupKeyboardEvents();
        console.log('Simple Calculator initialized');
    }
    
    setupEventListeners() {
        // Number buttons
        document.querySelectorAll('[data-number]').forEach(button => {
            button.addEventListener('click', (e) => {
                this.inputNumber(e.target.dataset.number);
                this.addButtonFeedback(e.target);
            });
        });
        
        // Operator buttons
        document.querySelectorAll('[data-operator]').forEach(button => {
            button.addEventListener('click', (e) => {
                this.inputOperator(e.target.dataset.operator);
                this.addButtonFeedback(e.target);
            });
        });
        
        // Function buttons
        document.querySelectorAll('[data-action]').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleAction(e.target.dataset.action);
                this.addButtonFeedback(e.target);
            });
        });
    }
    
    setupKeyboardEvents() {
        document.addEventListener('keydown', (e) => {
            const key = e.key;
            
            // Numbers
            if (/^[0-9]$/.test(key)) {
                this.inputNumber(key);
                this.highlightButton(`[data-number="${key}"]`);
            }
            // Operators
            else if (key === '+') {
                this.inputOperator('+');
                this.highlightButton('[data-operator="+"]');
            }
            else if (key === '-') {
                this.inputOperator('−');
                this.highlightButton('[data-operator="−"]');
            }
            else if (key === '*') {
                this.inputOperator('×');
                this.highlightButton('[data-operator="×"]');
            }
            else if (key === '/') {
                e.preventDefault();
                this.inputOperator('÷');
                this.highlightButton('[data-operator="÷"]');
            }
            // Functions
            else if (key === 'Enter' || key === '=') {
                e.preventDefault();
                this.handleAction('equals');
                this.highlightButton('[data-action="equals"]');
            }
            else if (key === 'Escape' || key === 'c' || key === 'C') {
                this.handleAction('clear');
                this.highlightButton('[data-action="clear"]');
            }
            else if (key === '.' || key === ',') {
                this.handleAction('decimal');
                this.highlightButton('[data-action="decimal"]');
            }
            else if (key === '%') {
                this.handleAction('percent');
                this.highlightButton('[data-action="percent"]');
            }
        });
    }
    
    addButtonFeedback(button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 100);
    }
    
    highlightButton(selector) {
        const button = document.querySelector(selector);
        if (button) {
            this.addButtonFeedback(button);
        }
    }
    
    inputNumber(number) {
        if (this.waitingForNewOperand) {
            this.currentValue = number;
            this.waitingForNewOperand = false;
        } else {
            this.currentValue = this.currentValue === '0' ? number : this.currentValue + number;
        }
        this.updateDisplay();
    }
    
    inputOperator(operator) {
        if (this.previousValue !== null && !this.waitingForNewOperand) {
            this.calculate();
        }
        
        this.previousValue = this.currentValue;
        this.operator = operator;
        this.waitingForNewOperand = true;
        
        this.history.textContent = `${this.previousValue} ${operator}`;
    }
    
    handleAction(action) {
        switch (action) {
            case 'clear':
                this.clear();
                break;
            case 'equals':
                this.calculate();
                break;
            case 'decimal':
                if (this.waitingForNewOperand) {
                    this.currentValue = '0.';
                    this.waitingForNewOperand = false;
                } else if (this.currentValue.indexOf('.') === -1) {
                    this.currentValue += '.';
                }
                this.updateDisplay();
                break;
            case 'percent':
                this.currentValue = (parseFloat(this.currentValue) / 100).toString();
                this.updateDisplay();
                break;
            case 'plusminus':
                if (this.currentValue !== '0') {
                    this.currentValue = this.currentValue.charAt(0) === '-' 
                        ? this.currentValue.slice(1) 
                        : '-' + this.currentValue;
                }
                this.updateDisplay();
                break;
        }
    }
    
    calculate() {
        if (this.previousValue === null || this.operator === null) return;
        
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);
        let result;
        
        switch (this.operator) {
            case '+':
                result = prev + current;
                break;
            case '−':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    this.display.textContent = 'Error';
                    this.history.textContent = 'Cannot divide by zero';
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }
        
        this.history.textContent = `${this.previousValue} ${this.operator} ${this.currentValue} = ${result}`;
        this.currentValue = result.toString();
        this.previousValue = null;
        this.operator = null;
        this.waitingForNewOperand = true;
        this.updateDisplay();
    }
    
    clear() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.waitingForNewOperand = false;
        this.history.textContent = '';
        this.updateDisplay();
    }
    
    updateDisplay() {
        let displayValue = this.currentValue;
        
        // Format large numbers with commas
        if (!isNaN(displayValue) && !displayValue.includes('.')) {
            const num = parseInt(displayValue);
            if (Math.abs(num) >= 1000) {
                displayValue = num.toLocaleString();
            }
        }
        
        this.display.textContent = displayValue;
        this.adjustFontSize();
    }
    
    adjustFontSize() {
        const text = this.display.textContent;
        const length = text.length;
        
        let fontSize;
        if (length <= 6) {
            fontSize = '40px';
        } else if (length <= 8) {
            fontSize = '36px';
        } else if (length <= 10) {
            fontSize = '32px';
        } else if (length <= 12) {
            fontSize = '28px';
        } else {
            fontSize = '24px';
        }
        
        this.display.style.fontSize = fontSize;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.simpleCalculator = new SimpleCalculator();
    console.log('Simple calculator loaded successfully!');
});
