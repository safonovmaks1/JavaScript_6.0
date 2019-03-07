'use strict';
   //Получить кнопку "Начать расчет" через id.
let startBtn = document.getElementById('start'),

    // Получить все блоки в правой части программы через классы которые имеют класс название-value.
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),

    // Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”).
    expenses = document.getElementsByClassName('expenses-item'),

    //  Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
    btns = document.getElementsByTagName('buttons'),
    expensesBtn = btns[0],
    optExpensesBtn = btns[1],
    countBudgetBtn = btns[2],

    // Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll.
    optExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    //   Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день).
    income = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');