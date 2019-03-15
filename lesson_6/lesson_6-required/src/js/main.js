'use strict';
let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

	expensesBtn = document.querySelector('.expenses-item-btn'),
	optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
	countBtn = document.querySelector('.count-budget-btn'),

	expensesItem = document.querySelectorAll('.expenses-item'),
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	
	incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value'),
	money, time;

startBtn.addEventListener('click', function() {
	time = prompt("Введите дату в формате YYYY.MM.DD", '');
	money = +prompt("Ваш бюджет на месяц?", '');
	
	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');	
	}

	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();

	countBtn.disabled = false;
	countBtn.style.background = '';
	
});

expensesBtn.addEventListener('click', function (){
	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {

			console.log("done");
			appData.expenses[a] = b;
			sum += +b;

		} else {
			i = i - 1;
		}
	}
	expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
	optionalexpensesValue.textContent = '';
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let que = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = que;
		optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

countBtn.addEventListener('click', function() {
	if (appData.budget != undefined) {
		let totalCosts = 0;
		
		for (let i in appData.expenses) {
			totalCosts += appData.expenses[i];
		}
		
		appData.moneyPerDay = (appData.budget - totalCosts) / 30;
		daybudgetValue.textContent = appData.moneyPerDay.toFixed(1);

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = 'Минимальный уровень достатка';
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = 'Средний уровень достатка';
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = 'Высокий уровень достатка';
		} else {
			levelValue.textContent = 'Произошла ошибка';
		}
	} else {
		daybudgetValue.textContent = 'Сначала нажмите кнопку Начать рассчет';
	}	
});

incomeItem.addEventListener('change', function() {
	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};


countBtn.disabled = true;
countBtn.style.background = 'grey';

expensesBtn.disabled = true;

expensesItem.forEach(function (item, index) {
	item.addEventListener('input', function () {
		if (index % 2 == 1) {
			if (!checkValidSum(item.value)) {
				item.value = item.value.slice(0, -1);
			}

		}
		expensesItem.forEach(function (i) {
			if (item.value == '') {
				expensesBtn.disabled = true;
				
			} else {
				expensesBtn.disabled = false;
			}
		});
	});
});

optionalExpensesBtn.disabled = true;

optionalExpensesItem.forEach(function (item) {
	item.addEventListener('input', function () {
		if (item != 0) {
			if (!checkValidRus(item.value)) {
				item.value = item.value.slice(0, -1);
			}

		}
		optionalExpensesItem.forEach(function (item) {
			if (item.value == '') {
				optionalExpensesBtn.disabled = true;
			} else {
				optionalExpensesBtn.disabled = false;
			}
		});
	});
});

function checkValidSum(input) {
	return /\d$/.test(input);
}

function checkValidRus(input) {
	return /[А-Яа-яЁё]$/.test(input);
}