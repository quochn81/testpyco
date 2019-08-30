const a = [1, 2, 3, 4, 5];
const iter = a[Symbol.iterator]();
let result;
while (!(result = iter.next()).done) {
  console.log(result.value);
}