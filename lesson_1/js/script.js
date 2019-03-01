'use strit';

// переменные (money и time)
let money = +prompt("Ваш бюджет на месяц?", ""), // число
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),

    // первый раз
    firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", ""),
    firstAnswer = +prompt("Во сколько обойдется?", ""), // число 
    // второй раз
    secondQuestion = prompt("Введите обязательную статью расходов в этом месяце", ""),
    secondAnswer = +prompt("Во сколько обойдется?", ""); // число

// Создать объект appData
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

/* Записать ответы в объект expenses в формате: 
    expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”
    }
*/
appData.expenses[firstQuestion] = firstAnswer;
appData.expenses[secondQuestion] = secondAnswer;

console.log(appData);

// Вывести на экран пользователя бюджет на 1 день(брать месяц за 30 дней)
alert(money / 30);