///В JavaScript одинарные и двойные кавычки равноправны

// Результат typeof null == "object" – это официально признанная ошибка в языке,
//  которая сохраняется для совместимости. На самом деле null – это не объект, а отдельный тип данных.
// Функции мы пройдём чуть позже. Пока лишь заметим, что функции не являются отдельным базовым типом в JavaScript, 
// а подвидом объектов. Но typeof выделяет функции отдельно, возвращая для них "function". На практике это весьма 
// удобно, так как позволяет легко определить функцию.
"---------------------------------------------------------------------"
Побитовые операторы
//toString
var n = 45;
var res = n.toString(2);
alert(res);

// Проверка, целое ли число
// важность: 3
// Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.
function isInteger(num) {
    alert(num);
    var a = num ^ 0;
    alert(a);

    if (a == num) {
        return true;
    } else {
        return false;
    }
}
alert(isInteger(9));
alert(isInteger(9.3));
"----------------------------------------------------------------------"
Взаимодействие с пользователем: alert, prompt, confirm
    //Создайте страницу, которая спрашивает имя и выводит его.
var name = prompt("Enter your name", "");
if (name) {
    alert('Your name is ' + name);
} else {
    alert("You wrote nothing");
}
Условные операторы: if, '?'
    //Перепишите if с использованием оператора '?':

if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}

result = (a + b < 4) ? 'Мало' : 'Много';
Циклы
while,
for
//При помощи цикла for выведите чётные числа от 2 до 10.
for (var i = 2; i <= 10; i++) {
    if (i % 2 != 0) continue;

    alert(i);
}

//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (var i = 0; i < 3; i++) {
    alert("номер " + i + "!");
}

var i = 0;
while (i < 3) {
    alert("номер " + i + "!");
    i++;
}
// Повторять цикл, пока ввод неверен
// важность: 5
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно
do {
    var a = promt("Enter number over 100", "");
} while (a <= 100);

// Вывести простые числа
// важность: 3
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.

// Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.
// ще не виправляв?
for (var i = 2; i <= 10; i++) {
    var a;
    for (var j = 2; j < i; j++) {

        if (i % j != 0 && i / i == 1) {
            a = true;
        } else {
            a = false;
            break;
        }
    }
    if (a)

    {
        alert(i);
    }
}
