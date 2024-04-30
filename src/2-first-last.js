export const firstLast = (items) => {
  if (items.length === 0) {
    return "No items!";
  } else if (items.length === 1) {
    return `Only item: ${items[0]}`
  } else {
  return `First: ${items[0]}, Last: ${items[items.length -1]}`
  }
}
//this code is retrieving the second element from an array instead of the last one
// we use the length of the array to dynamically find it 