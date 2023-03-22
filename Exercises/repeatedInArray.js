const array = [1,1,1,2,3,4,4,5,4,2]

//Naive approach --> O(n) time complexity
function countRepeatedInArray(arr) {
  const mySet = new Set();
  const len = arr.length;
  
  for(let i = 0; i < len; i++){
    for(let j = i+1; j < len; j++) {
      if(arr[i] === arr[j] && !mySet.has(arr[i])) {  
        mySet.add(`${arr[i]}_${arr[j]}`);
      }
    }
  }
  console.log(mySet)
}

//Linear complexity --> O(n)
function countRepeatedInArray2(arr) {
  const mySet = new Set(); 
  const counted = new Set();
  let count = mySet.size;
  
  for(let i = 0; i < arr.length; i++) {
    const element = arr[i]; 
    if(!counted.has(element) && mySet.has(element)) {
      counted.add(element);
      count++;
    }
    mySet.add(element);
  }
  
  console.log(count);
}

countRepeatedInArray2(array);