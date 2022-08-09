let map = new Map([
    [1, 10],
  
    [2, 11],
  
    [3, 12]
  ]);
  
  for (let nameK of map.keys()){ 
    console.log("Ключ - " + nameK + ",значение - " + map.get(nameK))
  }