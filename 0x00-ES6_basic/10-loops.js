export default function appendToEachArrayValue(array, appendString) {
  const answer = [];
  for (const [idx, value] of array.entries()) {
    answer[idx] = appendString + value;
  }
  return answer;
}
