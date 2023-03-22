//Quadratic time complexity O(n*n) --> O(n^2)

let array1 = [1,2,3,4,5]

function logPairs(array){
  for(let i = 0; i<array.length;i++){ //O(n)
    for(let j=0; j<array.length;j++){ //O(n)
      console.log(array[i] + ', ' + array[j])
    }
  }
}

logPairs(array1) 

