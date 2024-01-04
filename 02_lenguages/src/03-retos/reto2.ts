const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      }
    }
  }
};
const deepGet = (obj: object, ...propToSearch : string[]): unknown => {
  if (propToSearch[0] === undefined || propToSearch[0] === null) return undefined
  if(propToSearch.length === 0)  return obj;
  const {length}= propToSearch; 
  let objToSearch = structuredClone(obj);
  let props = [...propToSearch]; 
  let result;    
  for (let i = 0; i < length; i++){    
    // props[0] in objToSearch -> otra posibilidad
    if (Object.hasOwn(objToSearch,props[0]) && props.length === 1) {
      return result = objToSearch[props[0]];
    } else {
      objToSearch = objToSearch[props[0]];
      props.shift();
    }
  }
  return result; 
}
console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}

const myObject2 = {}
const deepSet = (valueProp : number , obj: object, ...keys: string[] ) : object => {
  const {length} = keys;
  if (length === 0) return obj;
  if (length === 1) {
    obj[keys[0]] = valueProp;
    return obj
  } 
  keys.reduce((acc, actualKey, index) => {
    if (index === length - 1) {
      acc[actualKey] = valueProp;
    } else {
      if (!acc[actualKey] || typeof acc[actualKey] !== 'object') {
        acc[actualKey] = {};
      }
      acc = acc[actualKey];
    }
    return acc;
  }, obj);

  return obj;
}

deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2));  // {a: { b: 1}}
deepSet(2, myObject2, "a", "c",);
console.log(JSON.stringify(myObject2));  // {a: { b: 1, c: 2}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2));  // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2)); // Do nothing // {a: 3}
