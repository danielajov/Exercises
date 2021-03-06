let year = prompt("Which Chinese Zodiac are you? Type your year of birth bellow:");
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

switch (formula) {
    case rat:
        alert(`You are Rat in Chinese Zodiac.`);
        break;

    case ox:
        alert(`You are Ox in Chinese Zodiac.`);
        break;
        
    case tiger:
        alert(`You are Tiger in Chinese Zodiac.`);
        break;

    case rabbit:
        alert(`You are Rabbit in Chinese Zodiac.`);
        break;

    case dragon:
        alert(`You are Dragon in Chinese Zodiac.`);
        break;

    case snake:
        alert(`You are Snake in Chinese Zodiac.`);
        break;

    case horse:
        alert(`You are Horse in Chinese Zodiac.`);
        break;

    case goat:
        alert(`You are Goat in Chinese Zodiac.`);
        break;

    case monkey:
        alert(`You are Monkey in Chinese Zodiac.`);
        break;

    case rooster:
        alert(`You are Rooster in Chinese Zodiac.`);
        break;

    case dog:
        alert(`You are Dog in Chinese Zodiac.`);
        break;

    case pig:
        alert(`You are Pig in Chinese Zodiac.`);
        break;

     default:
     alert("You have not entered your year of birth. Wrong value, try again!")
     break;
}