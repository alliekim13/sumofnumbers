// E26

var testList = [1, 2, 3, 4];

function sumFor(list) {
  let sum = 0;
  for (num in list) {
    sum += list[num];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
      sum += list[i];
      i++;
  }
  return sum;
}

function recursion(list, n) {
  if (n==0) return list[n];
  else return list[n] + recursion(list, n-1);
}

function underscore(list) {
  return (_.reduce(list, function(memo, num) { return memo+num; }, 0));
}

console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(underscore(testList));
console.log(recursion(testList, 3));