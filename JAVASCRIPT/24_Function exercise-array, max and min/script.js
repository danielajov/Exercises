let arrNums = [2, 6, 12, 14, 25, 120];

function minimumAndMaximum () {
    for (let i = 0; i <= arrNums.length; i++) {
        console.log(`Minimum number is: ${Math.min(...arrNums)} and maximum number is ${Math.max(...arrNums)}`);
    }
}

minimumAndMaximum();