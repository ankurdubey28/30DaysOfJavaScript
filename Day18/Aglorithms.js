// Searching algos
 // 1. Linear search

let arr=[1,2,11,4,5]
target=4
for(let i in arr){
    if(arr[i]===target) console.log(i)
}


// 2. Binary search
arr=arr.sort((a,b)=>a-b)
function bs(arr,target){
    let s=0
    let e=arr.length-1
    while(s<=e){
        let mid=(s+e)>>1;
        if(arr[mid]>target) e=mid-1;
        else if(arr[mid]<target)s=mid+1
        else return mid;
    }
    return -1
}

console.log(bs(arr,target))

// String algos
// 1. count character frequency
let str="oneplus one"
function countChar(str){
    let map=new Map()
    for(let i of str){
        if(!map.has(i)){
            map.set(i,1)
        }
        else{
            map.set(i,map.get(i)+1)
        }
    }
    console.log(map)
}
countChar(str)

// 2. Longest substring without repeating characters

function LongestSubstring(str) {
    let map = new Map();
    let maxLength = 0;
    let i = 0, j = 0;

    while (j < str.length) {
        if (map.has(str[j])) {
            i = Math.max(map.get(str[j]) + 1, i);
        }
        map.set(str[j], j);

        maxLength = Math.max(maxLength, j - i + 1);
        j++;
    }
    return maxLength;
}

console.log(LongestSubstring(str))



// Array algos

//1. rotate array by k positions

function rotateKTimes(arr,k){
  k=k%arr.length;
  for(let i=0;i<k;i++){
      arr.push(arr.shift())
  }
  return arr
}

console.log(rotateKTimes([1,2,3,4,5],3))

// 2. Merge two sorted arrays

function mergeSortedArrays(arr1,arr2){
    const mergedArr=[]
    let i=0,j=0,k=0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            mergedArr.push(arr1[i])
            i++;
        }
        else{
            mergedArr.push(arr2[j])
            j++;
        }
        k++;
    }
    while(i<arr1.length){
        mergedArr[k++]=arr1[i++]
    }
    while(j<arr2.length){
        mergedArr[k++]=arr2[j++]
    }
    return mergedArr
}

console.log(mergeSortedArrays([1,2,99],[4,56]))



// Sorting algos

//1. bubble sort

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
            if(arr[j-1]>arr[j]){
                arr[j-1] = arr[j-1] ^ arr[j];
                arr[j] = arr[j-1] ^ arr[j];
                arr[j-1] = arr[j-1] ^ arr[j];
            }
        }
    }
    return arr
}

console.log(bubbleSort([5,1,3,2,44,9]))


// 2.selection sort

function selectionSort(arr){

    for(let i=0;i<arr.length;i++){
        let min=i
        for(let j=i;j<arr.length;j++){
            if(arr[min]>arr[j]) min=j;
        }
        let temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
    return arr
}

console.log(selectionSort([5,4,3,2,1]))

// 3. quicksort

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            equal.push(arr[i]);
        }
    }
    return quickSort(left).concat(equal).concat(quickSort(right));
}
console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));
