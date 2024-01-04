const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
const flat =<T>( collection : T[]) : T[] => {
  const respuesta =[];
  const pila = [...collection];
  while (pila.length) {
    const nextElement = pila.pop();
    if (Array.isArray(nextElement)) {
      pila.push(...nextElement);
    } else {
      respuesta.unshift(nextElement);
    }
  }
  return respuesta;
};
console.log(flat(sample));