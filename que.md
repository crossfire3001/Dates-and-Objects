Домашка к уроку «Контрольное задание 7»
Создайте новую страницу и подключите к ней javascript файл.

Создайте массив clients для хранения информации о клиентах интернет-магазина:
Первый объект в массиве содержит свойства:
firstName - Александр, lastName - Иванчук, date - 11-29-1990, phone - 8 (929) 988-90-09, amounts - 2546, 2098, 764, 7266
Второй объект в массиве содержит свойства:
firstName - Анатолий, lastName - Стаценко, date - 02-12-1987, phone - null, amounts - 563, 8287, 889
Третий объект в массиве содержит свойства:
firstName - Марина, lastName - Петрова, date - 07-26-1997, phone - 8 (899) 546-09-08, amounts - 6525, 837, 1283, 392.
Четвертый объект в массиве содержит свойства:
firstName - Иван, lastName - Караванов, date - 09-12-1999, phone - null, amounts - 7634, 283, 9823, 3902.
Пятый объект в массиве содержит свойства:
firstName - Оксана, lastName - Абрамова, date - 01-24-2002, phone - 8 (952) 746-99-22, amounts - 342, 766, 362.

Цифры в свойстве объекта amounts - массив чисел (суммы покупок)

Часть 1

1. Создайте пустой объект newClient.

2. Запросите у пользователя по порядку все данные о клиенте - имя, фамилию, дату рождения, телефон. При запросе данных сохраняйте их в соответствующие свойства объекта newClient - firstName, lastName, date, phone. Дату запросите в формате мм-дд-гггг (месяц-день-год).

3. В качестве свойства amounts для объекта newClient установите пустой массив.

4. Затем создайте цикл while, который будет работать следующим образом: пока пользователь отвечает «ОК» на вопрос «Добавить покупку для клиента X?» (где X - имя клиента из объекта newClient), программа должна запрашивать сумму покупки и добавлять ее в массив amounts объекта newClient. Соответственно, если пользователь нажмет «Отмена», программа должна прекратить выполнение цикла.

5. Добавьте получившийся объект newClient в массив clients

Часть 2

1. Создайте функцию fullName, которая принимает объект и возвращает имя и фамилию в одной строке – «Иван Иванов».
   Проверить функцию можно вызвав ее для первого объекта и получив имя и фамилию первого клиента.

2. Создайте функцию getBirthday, которая на основе даты рождения клиента выдает строку в нужном формате: «1 мая» или «1 мая (сегодня)».
   Описание функции:
- Принимает строку (не объект) с датой рождения в формате мм-дд-гггг
- Преобразует полученную строку в объект типа new Date, и с помощью функции toLocaleString этого объекта формирует строку в формате «число месяц» (к примеру: «14 января», «23 марта»).
- Проверяет, сегодня ли день рождения у клиента, если да, то добавляет в итоговую строку « (сегодня)». Для этого можно сравнить дни и месяцы в имеющихся объектах дат.
- Возвращает из функции созданную строку
  Пример работы функции:
  В функцию попадает строка “07-01-2000”. Если сегодня 1 июля, то функция вернет строку «1 июля (сегодня)». Если же сегодня не 1 июля - функция вернет «1 июля».
  Проверить функцию можно вызвав ее для свойства даты первого объекта и получив отформатированную дату.

3. Создайте функцию getAllAmount, которая принимает один параметр: массив чисел (суммы покупок), считает сумму всех покупок клиента и возвращает её в виде числа.
   Проверить функцию можно вызвав ее для свойства суммы покупок первого объекта и получив число – их сумму.

4. Создайте функцию getAverageAmount, которая принимает один параметр: массив чисел (суммы покупок). Функция должна посчитать среднее арифметическое всех значений. Помните про последовательность действий: сначала считаем сумму чисел, а после – делим на количество. Возвращаемое число должно быть округлено до 1 числа после запятой с помощью конструкции number.toFixed(1), где number - ваша переменная с итоговым числом.
   Проверить функцию можно вызвав ее для свойства суммы покупок первого объекта и получив число – их среднее арифметическое.

5. Удалите все временные вызовы функций для проверок их результата.

6. Создайте стрелочную функцию в новую переменную - showClients. Функция должна принимать один параметр - главный массив клиентов clients и для каждого клиента (в цикле) выводить сообщение “Клиент X имеет среднюю сумму чека Y. День рождения клиента: D”, где X - значение результата функции fullName для текущего объекта клиента в цикле, Y - средний чек клиента на основе его покупок в массиве amounts из функции getAverageAmount, а D - дата рождения клиента из функции getBirthday. Помните о том, что внутри функции вам надо работать с переданным в неё массивом, а для каждого отдельного вызова других функций в цикле передавать соответствующее значение, используя конкретный объект по индексу.

7. Вызовите функцию showClients для всего массива объектов клиентов clients. Проверьте вывод в консоль – вы должны получить информацию по каждому из имеющихся клиентов в объекте clients.

8. Далее вызовите функцию showClients без параметров. Оберните этот вызов в обработчик ошибок. Результатом вызова без параметров должно стать сообщение “Вызвана функция без параметров” в консоли вместо ошибки. Вторым сообщением при обработке ошибки выведите текст ошибки из свойства message объекта ошибки.

9. Создайте новый массив bestClients, заполните его 2-3 новыми клиентами и вызовите функцию showClients с этим массивом. Проверьте вывод информации о новых клиентах в консоль.

10. Сделайте так, чтобы этот вызов функции был не сразу, а спустя 3 секунды.

11. Создайте функцию whoSpentMore, которая определит, кто из переданных клиентов потратил больше всех.
    Описание функции:
- Принимает массив объектов клиентов
- Перебирает каждого клиента и проверяет, больше ли его сумма покупок (с помощью функции getAllAmount), чем у другого клиента.
- В конце функция должна вывести в консоль строку: «Больше всех потратил N. Сумма покупок: X.», где N - полное имя клиента (на основе функции fullName), а X - сумма покупок max.
- В реализации функции используйте 2 дополнительные переменные, в которых будете сохранять самую большую сумму и найденный объект клиента с максимальной суммой. Если в цикле находите сумму больше, чем уже была сохранена вами в переменную максимальной суммы – обновляйте переменную суммы и объект, на основе которого по итогу вернете строку из функции.

12. Вызовите функцию whoSpentMore для одного и второго набора клиентов и проанализируйте результат. Поменяйте данные в объектах и перепроверьте, верно ли работает ваша функция.






Подсказки!



Часть 1
1. Пустой объект - {}
2. Запросите последовательно данные через функцию prompt присваивая результат этой функции в соответствующие поля.
3. Пустой массив - []
4. В условии цикла while используйте функцию confirm с вопросом «Добавить покупку для клиента X?». В теле цикла у пользователя через prompt запрашивается сумма, затем она преобразуется в число, после чего добавляется в свойство amounts (которое является массивом) объекта newClient с помощью метода push.
5. Для добавления нового клиента используется метод массива push куда передается объект newClient.

Часть 2
1. Первая функция принимает объект и возвращает строку, состоящую из соединения свойств firstName и lastName передаваемого объекта и пробела
2. Порядок действий в функции getBirthday:
- Создать константу birthday и записать в нее дату, созданную на основе полученной на входе строки (с помощью new Date)
- Создать новую переменную result и записать в нее дату в формате «число месяц» (к примеру: «14 января», «23 марта»). Сформировать такую дату можно при помощи функции toLocaleString объекта Date. Как она работает и какие параметры ей нужно передавать, можно посмотреть в документации.
- Создать константу today с сегодняшней датой (с помощью new Date)
- Проверить, сегодня ли у человека день рождения. Для этого нужно сравнить между собой дни из констант birthday и today и сравнить месяцы из этих констант. Если дни и месяцы совпадают, то к переменной result нужно дописать « (сегодня)»
- В конце функция должна возвращать (не выводить, а возвращать) переменную result.
3. Функция getAllAmount принимает один параметр, имеет созданную новую переменную sum, в которую прибавляются все числа (суммы покупок) переданного массива в цикле for. В конце нужно вернуть переменную sum.
4. Функция getAverageAmount принимает один параметр, имеет созданную новую переменную sum, в которую прибавляются все числа (суммы покупок) переданного массива в цикле for. Далее число sum делится на количество сумм - длину переданного массива, и округляется до 1 знака после запятой, используя функцию number.toFixed(1), результат этой операции можно присвоить в новую переменную, либо же опять присвоить в переменную sum.
5. Функция showClients принимает массив объектов (клиентов), по которым выполняется цикл внутри функции. В цикле выполняется вывод в консоль необходимой строки. В строке соединяются слова строками, результат функции fullName для текущего объекта, результат функции getAveragePurchase для массива amounts текущего объекта, и результат функции getBirthday для свойства date текущего объекта в итерации.
6. Вызов функции showClients() оберните в try/catch. Где в catch сначала выводится текст, а потом свойство объекта ошибки message.
7. Для вызова функции спустя три секунды, оберните вызов функции showClient(client) в функцию setTimeout(() => {...});
8. Функция whoSpentMore принимает на входе массив клиентов.
   В начале функции нужно объявить две переменных: max для хранения максимальной суммы покупок, и client для хранения объекта клиента, который имеет эту максимальную сумму.
   Функция должна циклом перебирать массив клиентов. Для каждого клиента рассчитываем сумму покупок при помощи функции getAllAmount. Далее вравниваем эту сумму с тем, что у нас хранится в переменной max. Если сумма у клиента больше, чем max, то нужно записать весь объект текущего клиента в переменную client, а также обновить переменную max.
   В конце, после цикла, выводим в консоль нужную строку, в которой соединяем указанный текст с результатом функции fullName для объекта client и с суммой из переменной max.
