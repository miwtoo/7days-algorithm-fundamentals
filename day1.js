export function add(n) {
   let sum = 0;
   for (let index = 1; index <= n; index++) {
      sum += index;
   }
   return sum;
}