export default function appendToEachArrayValue(array, appendString) {
  const newArray = []; // Create a new array to hold the results

  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
