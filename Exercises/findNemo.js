let large = new Array(1000).fill('nemo');
let nemoArray = ['nemo', 'lol']

function findNemo(array) {
  //let t0 = performance.now()
  for (let i = 0; i < array.length; i++){
    if(array[i] === 'nemo'){
      console.log('Found NEMO');
    }
  }
  //let t1 = performance.now()
  //console.log('Total time: ' + (t1-t0));
}

//findNemo(large); //O(n) --> Linear Time. 

const findNemo2 = (array) => {
  array.forEach(fish => {
    if(fish === 'nemo'){
      console.log('Found NEMO');
    }
  })
}

const findNemo3 = array => {
  for(let fish of array){
    if (fish === 'nemo'){
      console.log('found nemo 3');
    }
  }
}

findNemo2(nemoArray);
findNemo3(nemoArray);
