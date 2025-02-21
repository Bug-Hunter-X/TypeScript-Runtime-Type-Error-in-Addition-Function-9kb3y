function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b; //String concatenation
  }else if (typeof a === 'number' && typeof b === 'string'){
    return a + parseFloat(b);
  }else if (typeof a === 'string' && typeof b === 'number'){
    return parseFloat(a) + b;
  }
  return NaN; // or throw an error
}

let result1 = add(1, 2); // Correct usage
let result2 = addSafe("hello", 2); //Safe usage
let result3 = addSafe(1, "2"); //Safe usage
let result4 = addSafe("1", 2); //Safe usage
let result5 = addSafe("hello","world");
console.log(result1); // Output: 3
console.log(result2); // Output: "hello2"
console.log(result3); //Output: 3
console.log(result4); //Output: 3
console.log(result5); //Output: helloworld