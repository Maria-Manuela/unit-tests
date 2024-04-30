export const findIndex = (array, value) => {
  // Loop through each item in the array
  for (let i = 0; i < array.length; i++) {
    //If the current items matches the value, return the index
    if (array[i] === value) {
      return i; //Index of the found item
    }
  }

  // If not items matches the value, return-1
  return -1; 
}
