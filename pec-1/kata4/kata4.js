export default function removeFirstAndLast(string) {
  if (string.length <= 2) {
    return string;
  } else {
    let newString = string.slice(1, -1);
    return newString;
  }
}
