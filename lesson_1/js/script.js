'use strit';

// переменные (money и time)
let money = +prompt("Ваш бюджет на месяц?", ""), // число
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),

    // первый раз
    answer1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer2 = +prompt("Во сколько обойдется?", ""), // число 
    // второй раз
    answer3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer4 = +prompt("Во сколько обойдется?", ""); // число

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
appData.expenses[answer1] = answer2;
appData.expenses[answer3] = answer4;

console.log(appData);

// Вывести на экран пользователя бюджет на 1 день(брать месяц за 30 дней)
alert(money / 30);