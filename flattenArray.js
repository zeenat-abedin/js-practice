// flatten a nested array	
// ([1,[2], [3,4]] , 1) -> [1,2,3,4]
// ([1,[2, [3,4]]] , 1) -> [1, 2, [3,4]]
// ([1,[2, [3,4]]] , 2) -> [1, 2, 3,4]


const getFlatArray = (arr, depth) => {
  const flatHelper = (arr, currentDepth) => {
    // breaker condition
    if(currentDepth >= depth) return arr;
    
    return arr.reduce((acc,item) => {
      if(Array.isArray(item)){
        acc.push(...flatHelper(item, currentDepth + 1));
      } else {
        acc.push(item);
      }
      
      return acc;
    },[])
  }
  
  return flatHelper(arr, 0);
}

console.log(getFlatArray([1,[2], [3,4]] , 1));
console.log(getFlatArray([1,[2, [3,4]]] , 1));