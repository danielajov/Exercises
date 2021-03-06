function easyFunc(nums) {
    let sum = 0;
    for (let i = 1; i <= nums; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;

}

easyFunc(4);