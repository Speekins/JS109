//Question #1:
function isBalanced(string) {
  let count = 0;

  string = string.split('');

  for (let idx = 0; idx < string.length; idx++) {
    let letter = string[idx];
    if (letter === '(') count++;
    if (letter === ')') count--;
    if (count === -1) return false;
  }

  return count === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

/*
Questions:
Is a variable declared within a for loop re-assigned a new 
value on each iteration? Or is it more accurate to say a 
variable is re-initialized on each iteration, understanding 
that the variable goes out of scope at the end of the iteration. 
At the start of the next iteration, the value is re-declared and 
re-initialized to the next value of the iterable object?
*/

//Question #2:
function centerOf(string) {
  if (string.length === 1) return string;

  let half = Math.floor(string.length / 2);
  let firstHalf = string.slice(0, half);
  let secondHalf = string.slice(half);

  if (firstHalf.length === secondHalf.length) {
    return firstHalf.slice(-1) + secondHalf[0];
  } else { return secondHalf[0] };
}

centerOf('I Love JavaScript');
centerOf('Launch School');
centerOf('Launch');
centerOf('Launchschool');
centerOf('x');

//Question #3:
function wordLengths(string) {
  let wordArr = string.split(' ');

  wordArr.forEach((elem, idx) => {
    wordArr[idx] = elem + ' ' + elem.length;
  })

  return wordArr;
}

console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths('baseball hot dogs and apple pie'));
console.log(wordLengths("It ain't easy, is it?"));
console.log(wordLengths('Supercalifragilisticexpialidocious'));
console.log(wordLengths(''));
console.log(wordLengths());

//Questions #4:
function vowelsInARow(string) {
  let vowels = 0;
  let maxVowels = 0;

  for (let idx = 0; idx < string.length; idx++) {
    if ('aeiou'.includes(string[idx])) {
      vowels++;
      if (vowels > maxVowels) {
        maxVowels = vowels;
      }
    } else { vowels = 0 }
  }
  return maxVowels;
}

console.log('I like to eat cake too much');
console.log('An aardvark is a strange animal');
console.log('Have you ever been to Louisville?');

//Questions #5:
function triangle(a, b, c) {
  let angles = [a, b, c];
  let total = a + b + c;

  if (angles.includes(0) || total !== 180) return 'invalid';
  if (angles.includes(90)) return 'right';
  if (angles.some(num => num > 90)) return 'obtuse';

  return 'acute';
}

triangle(60, 70, 50);
triangle(30, 90, 60);
triangle(120, 50, 10);
triangle(0, 90, 90);
triangle(50, 50, 50);
triangle(60, 60, 70);
sdfawdfasdfa