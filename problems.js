function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let oddInd = [];
    for(let i = 1; i < arr.length; i+=2) {
        oddInd.push(arr[i]);
    }
    return oddInd;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let reverseodd = [];
    console.log(arr.length)
    for(let i = 1; i < arr.length; i+=2) {
        reverseodd.unshift(arr[i]);
    }
    console.log(reverseodd)
    return reverseodd;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    //num exp 2 = num * num
    // num exp 3 = num * num * num
    // 1 exp num = 1
    // 0 expo n = 0;
    let powersOf2 = [];
    for(let i = 1; i < arr.length; i*=2) {
        powersOf2.push(arr[i]);
    }
    return powersOf2;
}


function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let nPower = [];
    for(let i = 1; i < arr.length; i*=n) {
        nPower.push(arr[i]);
    }
    console.log(nPower)
    return nPower;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let halfOfArr = [];
    for(let i = 0; i < arr.length / 2; i++) {
        halfOfArr.push(arr[i]);
    }

    return halfOfArr;
}


function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let secondHalf = [];
    for(let i = arr.length - 1; i >= arr.length / 2; i--) {
        secondHalf.push(arr[i]);
    }
    console.log(secondHalf)
    return secondHalf;
}
secondHalf([1])

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
