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



let getAverageAmount = (amounts) => {
    let sum = amounts.reduce((total, amount) => total + amount, 0);
    return sum / amounts.length;
};

let getFormattedDate = (date) => {
    const options = {day: 'numeric', month: 'long'};
    return date.toLocaleString('ru-RU', options);
};


let getBirthday = (date) => {
    return new Date(date);
};




let getAllAmount = (amounts) => {
    return amounts.reduce((total, amount) => total + amount, 0);
};

let fullName = (client) => {
    return `${client.lastName} ${client.firstName}`;
};

let whoSpentMore = (clients) => {
    let maxSpent = 0;
    let clientWithMaxSpent = null;

    clients.forEach((client) => {
        let totalAmount = getAllAmount(client.amounts);
        if (totalAmount > maxSpent) {
            maxSpent = totalAmount;
            clientWithMaxSpent = client;
        }
    });

    if (clientWithMaxSpent) {
        let name = fullName(clientWithMaxSpent);
        console.log(`Больше всех потратил ${name}. Сумма покупок: ${maxSpent}.`);
    } else {
        console.log("Нет данных о клиентах");
    }
};


whoSpentMore(clients);
