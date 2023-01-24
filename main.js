//Reverse the letters of the words

const reverseString = (str) => {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
  }
  
  return newString; 
}

//How to check data type of var
const getDataType = (x) => {
  return typeof x;
}

//Empty an array 
const emptyArray = (x) => {
  x.splice(0, x.length);
  return x;
}

//Sum of elements in array
const sum = (arr) => {
  const a = arr.reduce((sum, x) => sum + x, 0);
  return a;
}

//How to copy array into other array
const copyArray = (arr) => {
  let arr2 = [];
  arr.forEach(x => {
    arr2.push(x);
  });
  return arr2;
}

//Merge array with duplicates
const widthDuplicate = (arr1, arr2) => {
  let arr3 = [];
  // arr1.forEach(x => {
  //   arr3.push(x);
  // });
  // arr2.forEach(x => {
  //   arr3.push(x);
  // });
  arr3 = arr3.concat(arr1, arr2);
  return arr3;
}

//Merge array without duplicates
const widthoutDuplicate = (arr1, arr2) => {
  const set = new Set(arr1.concat(arr2));
  const arr3 = [...set];
  return arr3;
}