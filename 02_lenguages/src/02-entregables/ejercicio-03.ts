import {a, b} from './data-exemple.js';

console.log("************** DELIVERABLE 03 *********************");
console.log("******* Clone *******");
function clone (source: object): Object {
   return Object.assign({},source);
  // return Object.fromEntries(Object.entries(source)) //esto implica una shadow copy
 //return {...Object.keys(source)}  
}
console.log(clone(a));
console.log("******* Merge *******");
type Merge = (arg1: object, arg2: object) => object;
const merge : Merge = (source, target)  => {
   // first solutions -> Object.assign({}, target, source);
   const targetFiltered = Object.entries(target).filter(([key,value]) => !Object.hasOwn(source,key));
   return {...source, ...Object.fromEntries(targetFiltered)};
}
console.log(merge(a,b));

