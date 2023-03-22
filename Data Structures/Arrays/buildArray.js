class MyArray {
  constructor(){
    this.length = 0;
    this.data = {};
  }

  getElement(index){
    console.log(this.data[index]);
    return(this.data[index]);
  }

  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
}

const array1 = new MyArray();

array1.push('Hello');
array1.getElement(0);
