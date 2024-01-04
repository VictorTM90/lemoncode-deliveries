// APARTADO A
const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
}

const memoize1 = fn => {
if (typeof fn !== 'function') return 
  let result;
  return (()=> {
    if (!result) {
    return result = fn()
  } else {
    return result
  }})
}; 

const memoized = memoize1(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

// APARTADO B ¿Podrías hacerlo en una sola línea?
const memoizeOneLine = fn => {let result; return () => result || (result = fn());};

// APARTADO C  
let count = 0; // Comprobacion de nº de ejecuciones
// type RepeatText = (reptetitions: number, text: string) => string
const repeatText = (repetitions: number, text: string): string =>
  (count++, `${text} `.repeat(repetitions).trim())

type CommonArg = string|number|boolean;
type FnToMemoize = (arg1: CommonArg, arg2: CommonArg) => CommonArg;
type Memoize = (fn : FnToMemoize) => FnToMemoize;

const memoize : Memoize = (fn: FnToMemoize) => {
  let resultCache ={};
  return (arg1, arg2) => {
    const cacheArg = arg2.toString() // si el valor 
    if(resultCache[cacheArg]?.[arg1]) return resultCache[cacheArg][arg1]
    if (!resultCache[cacheArg]) {
      const resultFn = fn(arg1,arg2);
      resultCache[cacheArg] = {[`${arg1}`]: resultFn}
      return resultFn;
    } else {
      const resultFn = fn(arg1,arg2);
      resultCache[cacheArg] = {...resultCache[cacheArg], [`${arg1}`]: resultFn}
      return resultFn;
    }
  }
}
const memoizedGreet = memoize(repeatText);

console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);