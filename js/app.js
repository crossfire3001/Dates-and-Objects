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
        result += " (сегодня)";
    }
    // Возвращает из функции созданную строку
    return result;
}

let b = getBirthday('08-27-1987');
console.log(b);

