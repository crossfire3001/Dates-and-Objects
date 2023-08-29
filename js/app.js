let clients = [
    {
        firstName: 'Александр',
        lastName: 'Иванчук',
        date: '11-29-1990',
        phone: 89299889009,
        amounts: [2546, 2098, 764, 7266]
    },
    {
        firstName: 'Анатолий',
        lastName: 'Стаценко',
        date: '02-12-1987',
        phone: null,
        amounts: [563, 8287, 889]
    },
    {
        firstName: 'Марина',
        lastName: 'Петрова',
        date: '07-26-1997',
        phone: null,
        amounts: [6525, 837, 1283, 392]
    },
    {
        firstName: 'Иван',
        lastName: 'Караванов',
        date: '09-12-1999',
        phone: 89299889009,
        amounts: [7634, 283, 9823, 3902]
    },
    {
        firstName: 'Оксана',
        lastName: 'Абрамова',
        date: '01-24-2002',
        phone: 9527469922,
        amounts: [342, 766, 362]
    }
];

/* Часть 1 */


// 1. Создайте пустой объект newClient
let newClient = {
    amounts: []
};

// 2.
//newClient.firstName = prompt('Имя клиента?', "");
//newClient.lastName = prompt('Фамилия клиента?', "");
//newClient.date = prompt('Дата рождения в формате месяц-день-год', "");
//newClient.phone = parseInt((prompt('Ваш телефонный номер', "")));

// 3. Создать пустой массив

// 4.
/* while (confirm('Добавить покупку для клиента ' + newClient.name + ' ? ')) {
    let sum= parseInt((prompt('Сумма', "")));
    newClient.amounts.push(sum);
} */

// 5. Добавьте получившийся объект newClient в массив clients
//clients.push(newClient);


/* Часть 2 */

// 1.

let fullName = (client) => {
    return client.firstName + ' ' + client.lastName;
};

//let checkFullName = fullName(clients[0]);
//console.log(checkFullName);

// 2.

// Принимает строку (не объект) с датой рождения в формате мм-дд-гггг
let getBirthday = (date) => {

    // Модифицируем наши опции чтобы выводили (к примеру: «14 января», «23 марта»)
    let options = {
        month: "long",
        day: "numeric",
    };

    // Создаем новую переменную, которая принимает дату
    const today = new Date();

    // Принимает день рождение из нашего массива клиентов
    const birthday = new Date(date);
    /* Преобразует полученную строку в объект типа new Date,
    и с помощью функции toLocaleString этого объекта формирует
    строку в формате «число месяц» (к примеру: «14 января», «23 марта») */
    let result = birthday.toLocaleString('ru-RU', options);


    /* Проверяет, сегодня ли день рождения у клиента, если да, то добавляет в итоговую строку «(сегодня)».
    Для этого можно сравнить дни и месяцы в имеющихся объектах дат. */
    if (today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth()) {
        // наша строка с результатом
        result += ' (сегодня)';
    }
    // Возвращает из функции созданную строку
    return result;
};

let b = getBirthday(clients[0].date);
console.log(b); // 29 ноября

// 3.

// Создаем функцию getAllAmount, которая принимает один параметр: массив чисел (суммы покупок)
let getAllAmount = (totalSum) => {

    // создаем переменную равную 0
    let sum= 0;

    // приходимся циклом по длине нашего массива
    for (let i = 0; i < totalSum.length; i++) {
        // Считаем сумму всех покупок клиента
        sum += totalSum[i];
    }
    // возвращаем сумму покупок в виде числа
    return Number(sum);
};

console.log((getAllAmount(clients[0].amounts)));

// 4.
/* Создайте функцию getAverageAmount, которая принимает один параметр: массив чисел (суммы покупок).
Функция должна посчитать среднее арифметическое всех значений. Помните про последовательность действий:
сначала считаем сумму чисел, а после – делим на количество. Возвращаемое число должно быть округлено
до 1 числа после запятой с помощью конструкции number.toFixed(1), где number - ваша переменная с итоговым числом.
Проверить функцию можно вызвав ее для свойства суммы покупок первого объекта и получив число –
их среднее арифметическое. */

// Создаем функцию getAverageAmount, которая принимает один параметр: массив чисел (суммы покупок)
let getAverageAmount = (totalArray) => {

    // создаем переменную равную 0
    let sum = 0;

    // приходимся циклом по длине нашего массива
        for(let i = 0; i < totalArray.length; i++) {

            // Считаем сумму всех покупок клиента
            sum += totalArray[i];
        }

        // создаем переменную в которой делим сумму покупок на количество
        let averageSum = sum / totalArray.length;

        // округляем наше число
        averageSum.toFixed();

        // возвращаем наш результат средней цены покупок
        return averageSum;
};

// console.log((getAverageAmount(clients[0].amounts)));

// 5. Удалите все временные вызовы функций для проверок их результата.

// 6.

/*
// Создайте стрелочную функцию в новую переменную - showClients. Функция принимает главный массив клиентов clients
let showClients = (clients) => {

    // запускаем цикл для каждого клиента
    clients.forEach((client) => {

        // Наше сообщение для каждого клиента (в цикле)
        let message = 'Клиент ' + fullName(client) + ' имеет среднюю сумму чека ' +
            getAverageAmount(client.amounts).toFixed() + ' рублей. ' + 'День рождение клиента: '
            + getBirthday(client.date);
        console.log(message);
    });
};
*/

// 7. Вызовите функцию showClients для всего массива объектов клиентов clients.
// Проверьте вывод в консоль – вы должны получить информацию по каждому из имеющихся клиентов в объекте clients.

//showClients(clients);

// 8.
try {
    showClients();
} catch (error) {
    console.log('Вызвана функция без параметров');
    console.log('Ошибка: ' + error.message);
}

// 9.
let bestClients = [
    {
        firstName: 'Юлисей',
        lastName: 'Данчук',
        date: '10-13-1950',
        phone: 89299889009,
        amounts: [254, 98, 3764, 5266]
    },
    {
        firstName: 'Нанотолий',
        lastName: 'Грищенко',
        date: '05-20-1981',
        phone: null,
        amounts: [1563, 887, 1889]
    },
];

let showClients = (clients) => {
    clients.forEach((client) => {

        let message = 'Клиент ' + fullName(client) + ' имеет среднюю сумму чека ' +
            getAverageAmount(client.amounts).toFixed() + ' рублей. ' + 'День рождение клиента: '
            + getBirthday(client.date);
        console.log(message);
    });
};



// 10.
/* setTimeout(() => {
    showClients(bestClients);
}, 3000) */



// 11.

/* Создайте функцию whoSpentMore, которая определит, кто из переданных клиентов потратил больше всех.
Описание функции:
- Принимает массив объектов клиентов
- Перебирает каждого клиента и проверяет, больше ли его сумма покупок (с помощью функции getAllAmount), чем у другого клиента.
- В конце функция должна вывести в консоль строку: «Больше всех потратил N. Сумма покупок: X.»,
где N - полное имя клиента (на основе функции fullName), а X - сумма покупок max.
- В реализации функции используйте 2 дополнительные переменные,
в которых будете сохранять самую большую сумму и найденный объект клиента с максимальной суммой.
Если в цикле находите сумму больше, чем уже была сохранена вами в переменную максимальной суммы –
обновляйте переменную суммы и объект, на основе которого по итогу вернете строку из функции. */

/* Создайте функцию whoSpentMore, которая определит, кто из переданных клиентов потратил больше всех.
Эта функция принимает массив объектов клиентов */
let whoSpentMore = (clients) => {

    // Создание двух дополнительных переменных для реализации наших задач
    let max = 0;
    let clientWithMaxSpent = 0;

    /* Перебираем каждого клиента и проверяет, больше ли его сумма покупок (с помощью функции getAllAmount),
    чем у другого клиента */
    clients.forEach((client) => {

        // проверяем общее число покупок клиента
        let totalAmount = getAllAmount(client.amounts);

        // общее количество покупок больше 0
        if (totalAmount > max) {
            // присваиваем переменной max максимальное количество покупок
            max = totalAmount;
            // Сохраняем объект клиента с максимальной суммой
            clientWithMaxSpent = client;
        }
    });

    // Если это условие true
    if (clientWithMaxSpent) {
        let name = fullName(clientWithMaxSpent);
        console.log('Больше всех потратил ' + name + ' ' + ' Сумма покупок: ' + max);
    } else {
        console.log("Нет данных о клиентах");
    }
};

whoSpentMore(clients);