console.log("************** DELIVERABLE 01 *********************");
import {number, classic} from './data-exemple.js';
const head = <T>([first]: T[]): T => first; 
console.log(`Response: ${head(number)}, Array:`, number)

const tail = <T>([first, ...restElements]: T[]) => restElements; 
console.log(`Response: ${tail(classic)}, Array:`, classic)

const init = <T> (elements: T[]): T[] => {
  if(!elements) return 
  return elements.slice(0,elements.length-1)
};
console.log(`Response INIT: ${init(classic)}, Array:`, classic);

const last = <T> (elements: T[]): T => elements.at(-1);
console.log(`Response LAST: ${last(classic)}, Array:`, classic);



