function loadGrain(levels) {
    let rightMax = 0,
        leftMax = 0,
        rightValue = levels.length - 1,
        leftValue = 0,
        result = 0

    while (leftValue < rightValue) {
        if (levels[leftValue] > leftMax) {
            leftMax = levels[leftValue];
        }
        if (levels[rightValue] > rightMax) {
            rightMax = levels[rightValue];
        }
        if (leftMax >= rightMax) {
            result += rightMax - levels[rightValue];
            rightValue--;
        } else {
            result += leftMax - levels[leftValue];
            leftValue++;
        }
    }
    return result;
}

console.log(loadGrain([15, 0, 6, 10, 11, 2, 5]))//20
console.log(loadGrain([4, 1, 3]))// 2
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]))// 7
console.log(loadGrain([2, 0, 1, 5, 2, 7])) // 6
console.log(loadGrain([2, 4, 2])) // 0
console.log(loadGrain([7, 4])) // 0
console.log(loadGrain([])) // 0