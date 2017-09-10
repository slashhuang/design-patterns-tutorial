/**
 * 可遍历模式
 * ES6支持提供next方法的任何对象
 * https://en.wikipedia.org/wiki/Iterator_pattern#JavaScript
 * returns an object with two specific properties:
 *  done and value
 */
// for ( var a = 1; a < 5; a++) {
//     console.log(a);
// }
// GeneratorFunction.next()
// rxjs ==> observer.next();
// yield
const iteratorP = (arr) => {
    let index = 0;
    return {
        next: () => {
            index++;
            if (index - 1 >= arr.length) {
                return {
                    done: true,
                }
            } else {
                return {
                    done: false,
                    value: arr[index-1], 
                }
            }
        }
    }
};
const it1 = iteratorP([1,2,3,4,5]);
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())

function range(start, end) {
  return {
    [Symbol.iterator]() { //#A
      return this;
    },
    next() {
      if(start < end) {
        return { value: start++, done:false }; //#B
      }
      return { done: true, value:end }; //#B
    }
  }
}

for(number of range(1, 5)) {
   console.log(number);   //-> 1, 2, 3, 4
}