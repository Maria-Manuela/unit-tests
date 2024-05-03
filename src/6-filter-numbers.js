export const filterNumbers = (array, largerThan) => {
  // filter to keep only numbers less than or equal to 'largerThan'
  const filteredArray = array.filter((item) => {
    if (typeof item !== "number") {
      throw new Error("Invalid array item: all elements must be numbers");
    }
    return item <= largerThan; //keep number that are smaller than or equal to the threshold
  });

  return filteredArray;
};

//filtering logic is missing. filter method is used to keep only the elements where the condition ('item <= largerThan') is true
// the logics checks that 'item'  is a number and only keeps the elements less than or equal to 'largerThan'
