console.log("************** DELIVERABLE 02 *********************");
import {number, classic, books} from './data-exemple.js';
const concat = <T, S>(packOne: T[], packTwo: S[] ): (T|S)[] => [...packOne, ...packTwo];  
console.log(`Response Concat: ${concat(classic, number)}, Array:`, classic);
// optional
const newConcat = <T>(...arrays: unknown [][]): unknown [] => {
  if(!arrays.every(Array.isArray)) return  
  return arrays.reduce((acc, curr) => [...acc, ...curr], []); }
console.log(`Response newConcat: ${newConcat(classic, number, books)}, Array:`, classic);