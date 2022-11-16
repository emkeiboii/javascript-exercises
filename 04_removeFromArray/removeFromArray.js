const removeFromArray = function(...args) {
  const array = args[0];
  const newArray = [];
  array.forEach((item) =>{
    if(!args.includes(item)){
      newArray.push(item);
    }
  });
  return newArray
}

removeFromArray([1, 2, 3, 4], 3)
removeFromArray([1, 2, 3, 4], 3, 2)
removeFromArray([1, 2, 3, 4], 7, "tacos")
removeFromArray([1, 2, 3, 4], 7, 2)
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)
removeFromArray(["hey", 2, 3, "ho"], "hey", 3)
removeFromArray([1, 2, 3], "1", 3)

// Do not edit below this line
module.exports = removeFromArray;
