
// 2sum
function twoSum(arr,target){
    arr.sort((a,b)=>a-b)
    let i=0,j=arr.length-1
    let sum=0

    while(i<=j){
        if(target>arr[i]+arr[j]) i++;
        else if(target<arr[i]+arr[j]) j--;
        else return [arr[i],arr[j]]
    }
    return [-1]
}

console.log(twoSum([4,2,1,11,99],100))




// Reverse Integer

function reverseInteger(integer){
    let str=integer.toString()
    let sign=str[0]
    const arr=[]
    let i=str.length-1
    let end=0
    if(sign==='-'){
        end=1
        arr.push('-')
    }
    while (i>=end){
        arr.push(str.charAt(i))
        i--
    }
    return arr.join('').trim();
}

console.log(reverseInteger(-98))




// Palindrome Number
function palindrome(integer){
    let str=integer.toString();
    if(str[0]==="-") {
        console.log("Not palindrome")
        return
    }
    let i=0,j=str.length-1
    while (i<=j){
        if(str.charAt(i)!==str.charAt(j)) {
            console.log("Not palindrome")
            return
        }
        i++
        j--
    }
    console.log("palindrome")
}

palindrome(1212)



// Merge two sorted lists

function mergeLists(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    // Compare elements from both arrays and merge them in sorted order
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // Add any remaining elements from arr1
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // Add any remaining elements from arr2
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

let arr1 = [1, 3, 5];
let arr2 = [1, 3, 5];

let merged = mergeLists(arr1, arr2);
console.log(merged);




// Valid parenthesis

function validParenthesis(s) {
    const stack = [];
    const map = {
        '(':')',
        '[':']',
        '{':'}'
    };

    for (let char of s) {
        if (map[char]) {

            stack.push(char);
        } else {

            const topElement = stack.pop();
            if (char !== map[topElement]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(validParenthesis("{{()}}"))
