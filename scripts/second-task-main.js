//1
let number = +prompt("Enter number 0-9 :", "0");
switch (number) {
    case 0:
        alert(")");
        break;
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    case 5:
        alert("%");
        break;
    case 6:
        alert("^");
        break;
    case 7:
        alert("&");
        break;
    case 8:
        alert("*");
        break;
    case 9:
        alert("(");
        break;
}

//2
let year = +prompt("Enter year :", "2023");
if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
    alert("This year is leap");
}
else {
    alert("This is non-leap year");
}

//3
let year_1 = +prompt("Enter year :", "2023");
let month = +prompt("Enter month :", "1");
let day = +prompt("Enter day :", "1");
day += 1;
if (day > 31) {
    day = 1;
    month += 1;
    if (month > 12) {
        month = 1;
        year_1 += 1;
    }
}
alert(`Next date ${day}.${month}.${year_1}`);