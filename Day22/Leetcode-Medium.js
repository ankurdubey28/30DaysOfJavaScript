// 1.Add two numbers - input numbers are in from of linkedlist

function addTwoNumbers(head1, head2) {
    let arr1 = [], arr2 = [];

    // Push the linked list values into arrays
    while (head1 != null) {
        arr1.push(head1.val);
        head1 = head1.next;
    }
    while (head2 != null) {
        arr2.push(head2.val);
        head2 = head2.next;
    }

    // Reverse the arrays to start adding from least significant digits
    arr1.reverse();
    arr2.reverse();

    let carry = 0;
    let arr3 = [];

    // Add corresponding digits and handle carry
    let i = 0, j = 0;
    while (i < arr1.length || j < arr2.length || carry > 0) {
        let sum = carry;
        if (i < arr1.length) sum += arr1[i++];
        if (j < arr2.length) sum += arr2[j++];

        arr3.push(sum % 10);
        carry = Math.floor(sum / 10);
    }

    // Reverse the result to build the linked list from the most significant digit
    arr3.reverse();

    // Create the result linked list
    let newNode = null;
    let currNode = null;
    for (let k = 0; k < arr3.length; k++) {
        if (newNode == null) {
            newNode = new ListNode(arr3[k]);
            currNode = newNode;
        } else {
            currNode.next = new ListNode(arr3[k]);
            currNode = currNode.next;
        }
    }

    return newNode;
}



// 3sum

function threeSum(arr) {
    let ans = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let k = i + 1;
        let j = arr.length - 1;

        while (k < j) {
            if (arr[i] + arr[k] + arr[j] === 0) {
                ans.push([arr[i], arr[k], arr[j]]);
                k++;
                j--;
                while (k < j && arr[k] === arr[k - 1]) k++;
                while (k < j && arr[j] === arr[j + 1]) j--;
            } else if (arr[i] + arr[k] + arr[j] > 0) {
                j--;
            } else {
                k++;
            }
        }
    }
    return ans;
}


// Longest Substring without repeating characters

function lengthOfLongestSubstring(s){
    let i=0,j=0,size=0;
    let mp=new Map()
    while(j<s.length){
        if(!mp.has(s.charAt(j))){
            mp.set(s.charAt(j),0);
        }else{
            mp.set(s.charAt(j),mp.get(s.charAt(j))+1)
        }

        if(mp.size===j-i+1){
            size=Math.max(size,j-i+1)
        }
        while(mp.size<j-i+1){
            mp.set(s.charAt(i),mp.get(s.charAt(i))-1)
            if(mp.get(s.charAt(i))===0){
                mp.delete(s.charAt(i));
            }
            i++;
        }
        j++;
    }
    return size;
}



// Group anagrams

function groupAnagrams(strs) {
    let map = new Map();

    for (let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split('').sort().join('');

        if (map.has(sortedStr)) {
            map.get(sortedStr).push(strs[i]);
        } else {
            map.set(sortedStr, [strs[i]]);
        }
    }

    let ans = Array.from(map.values());

    return ans;
}



// Container with most water

var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};