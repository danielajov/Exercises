// HOMEWORK PART 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs

let dog = {
    dogName: "Leo",
    dogKind: "Very kind",
    dogSpeak: "Hey bro!!!",

    dogSpeakFunction: function (message) {
        message = prompt(dog.dogSpeak).value;
        console.log(`${dog.dogName} says: '${dog.dogSpeak}'`);
    }
}
dog.dogSpeakFunction();
