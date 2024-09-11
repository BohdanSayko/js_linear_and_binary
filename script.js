function binarySearch(arr, findNum) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === findNum) {
        return mid; 
      } else if (arr[mid] < findNum) {
        left = mid + 1; 
      } else {
        right = mid - 1; 
      }
    }  
    return -1; 
}

function linearSearch(arr, findNum) {   
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === findNum) {
            return i; 
        }
    }
    return -1; 
}

let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100
];

let findNumberLinear = +prompt("Enter the number to find in array for linear search: ");
let findNumberBinary = +prompt("Enter the number to find in array for binary search: ");

let resultLinear = linearSearch(arr, findNumberLinear);
let resultBinary = binarySearch(arr, findNumberBinary);

if (resultBinary !== -1) {
    console.log("Binary search: ", arr[resultBinary]);
} else {
    console.log("Binary search: Number not found");
}

if (resultLinear !== -1) {
    console.log("Linear search: ", arr[resultLinear]);
} else {
    console.log("Linear search: Number not found");
}
