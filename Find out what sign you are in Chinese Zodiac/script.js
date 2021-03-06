let year = prompt(
  "Which Chinese Zodiac are you? Type your year of birth bellow:"
);
let parsedYear = parseInt(year);
console.log(year);
console.log(parsedYear);

let formula = (year - 4) % 12;
console.log(formula);

let rat = 0;
console.log(rat);

let ox = 1;
console.log(ox);

let tiger = 2;
console.log(tiger);

let rabbit = 3;
console.log(rabbit);

let dragon = 4;
console.log(dragon);

let snake = 5;
console.log(snake);

let horse = 6;
console.log(horse);

let goat = 7;
console.log(goat);

let monkey = 8;
console.log(monkey);

let rooster = 9;
console.log(rooster);

let dog = 10;
console.log(dog);

let pig = 11;
console.log(pig);

if (Number.isNaN(parsedYear)) {
  alert("You have not entered your year of birth. Wrong value, try again!");
} else if (formula === rat) {
  alert(`You are Rat in Chinese Zodiac.`);
} else if (formula === ox) {
  alert(`You are Ox in Chinese Zodiac.`);
} else if (formula === tiger) {
  alert(`You are Tiger in Chinese Zodiac.`);
} else if (formula === rabbit) {
  alert(`You are Rabbit in Chinese Zodiac.`);
} else if (formula === dragon) {
  alert(`You are Dragon in Chinese Zodiac.`);
} else if (formula === snake) {
  alert(`You are Snake in Chinese Zodiac.`);
} else if (formula === horse) {
  alert(`You are Horse in Chinese Zodiac.`);
} else if (formula === goat) {
  alert(`You are Goat in Chinese Zodiac.`);
} else if (formula === monkey) {
  alert(`You are Monkey in Chinese Zodiac.`);
} else if (formula === rooster) {
  alert(`You are Rooster in Chinese Zodiac.`);
} else if (formula === dog) {
  alert(`You are Dog in Chinese Zodiac.`);
} else if (formula === pig) {
  alert(`You are Pig in Chinese Zodiac.`);
}
