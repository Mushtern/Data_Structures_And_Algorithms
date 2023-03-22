//Merge two given sorted arrays into one big sorted array.

function mergeSorted(arr1, arr2) {

  //Check input

  if(arr1.length === 0){
    console.log(arr2);
  }

  else if(arr2.length === 0){
    console.log(arr1);
  }

  //Actual code
  else{

    let merged = [];
    let mergedSorted = [];
    let mySet = new Set();
    
    for(let i = 0; i < arr1.length; i++){
      merged.push(arr1[i]);
    }

    for(let i = 0; i < arr2.length; i++){
      merged.push(arr2[i]);
    }

  }
}


const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

mergeSorted(arr1, arr2);
