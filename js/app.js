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

let fullName = (clients) => {
    return clients.firstName + ' ' + clients.lastName;
}

let checkFullName = fullName(clients[0]);
//console.log(checkFullName);

// 2.

let getBirthday = (date) => {
    const birthday = new Date(date);

    let options = {
        month: "long",
        day: "numeric",
    };

    let result = birthday.toLocaleString('ru-RU', options);

    const today = new Date();

    if (today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth()) {
        result += " (сегодня)";
    }
    return result;
}

let b = getBirthday('08-27-1987');
console.log(b);

