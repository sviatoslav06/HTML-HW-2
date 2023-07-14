//1
let start = +prompt("Enter first number :", "0");
let end = +prompt("Enter second number :", "10");
let res = 0;
if (end > start) {
    for (let i = start; i <= end; i++) {
        res += i;
    }
}
else if (start > end) {
    for (let i = end; i <= start; i++) {
        res += i;
    }
}
else if (start == end) {
    res = 0;
}
alert(`Sum of numbers = ${res}`);

//2
let number = +prompt("Enter number :", "0");
let count = 0;
while (number > 1) {
    number /= 10;
    count++;
}
alert(`Count of symbols ${count}`);

//3
let num;
let count_positive = 0;
let count_negative = 0;
let count_zeros = 0;
let count_even = 0;
let count_noneven = 0;
for (let i = 0; i < 10; i++) {
    num = +prompt(`Enter ${i + 1} number`, "1");
    if (num > 0) count_positive++;
    if (num < 0) count_negative++;
    if (num == 0) count_zeros++;
    if (num % 2 == 0) count_even++;
    if (num % 2 != 0) count_noneven++;
}
alert(`Count positive = ${count_positive}\nCount negative = ${count_negative}\nCount zeros = ${count_zeros}\nCount even = ${count_even}\nCount non-even = ${count_noneven}`);

//4
let isNext = true;
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let count_d = 0;
do {
    isNext = confirm(days[count_d] + "Do you want to see the next day?");
    count_d += 1;
    if (count_d == 7) count_d = 0;
} while (isNext);