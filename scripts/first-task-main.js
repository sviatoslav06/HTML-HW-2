// 1
const now = 2023;
let birth = +prompt("Enter your birth year :", "2023");
let res_1 = 2023 - birth;
alert(`You're ${res_1} years old`);

// 2
const file = 820;
let fleshka = +prompt("Enter the volume of the flash drive(Gb) :", "1");
let capacity_of_fleshka = fleshka * 1000;
let res_2 = capacity_of_fleshka / file;
alert(`Your flash drive can hold ${res_2} files(820Mb)`);