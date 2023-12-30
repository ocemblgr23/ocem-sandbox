console.log("Hello World App Typescript");


const calcCartItem = (...numItem:number[]) => {
  return numItem;
}

const nums = [1,2,3,4]

console.log(calcCartItem(...nums));
