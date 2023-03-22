const array = [1,1,2,3,4,4,5]

function countPairsInArray(arr1){
  let len = arr1.length;
  const mySet = new Set();
  for(let i = 0; i < len; i++){
    if(arr1[i] === arr1[i+1]){
      if(!mySet.has(arr1[i])){
        mySet.add(arr1[i]);
      }
    }
  }
  console.log(mySet.size);
}

countPairsInArray(array);