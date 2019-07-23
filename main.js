const classroom = ['Colin', 'Mesuara', 'Nick', 'John', 'Drew', 'Emma', 'J', 'Ben', 'Ryan', 'Chris', 'In Seop', 'Olgy'];

console.log('# Challenge #1');

// Manually add every student BUT yourself to the above array by directly writing the strings in there, and console out how many are in there, using `length`.

console.log(classroom.length);


console.log('# Challenge #2');

// Now use `push` to get yourself in there, and console out the new length.

classroom.push('Mike');

console.log(classroom.length);


console.log('# Challenge #3');

// Now console out the 1st person. It should be 'Colin'!

console.log(classroom[0]);


console.log('# Challenge #4');

// Console out the 5th person. Don't forget to start counting at 0!

console.log(classroom[4]);

console.log('# Challenge #5');

// Now console out the last, but use `length` to find it. It should be yourself!

const lastIndex = classroom.length - 1;

const lastPerson = classroom[lastIndex];

console.log(lastPerson);


console.log('# Challenge #6');

// Now console out the next to last, still using `length`.

const nextToLastIndex = classroom.length - 2;

const nextToLastPerson = classroom[nextToLastIndex];

console.log(nextToLastPerson);


console.log('# Challenge #7');

// Remove the last person and console out the new length of the array. It should be the same as Challenge #1, since we've added then removed one person.

classroom.pop();
console.log(classroom.length);


console.log('# Challenge #8');

// Now console out the person you just removed. You might have to change the code from a previous challenge to save that person before they're gone!

console.log(lastPerson);


console.log('# Challenge #9');

// Now remove and console out the name of the _first_ person on the list.

const first = classroom[0];
classroom.shift();
console.log(first);


console.log('# Challenge #10');

// Now remove and console out the name of the _new_ first person on the list.

const newFirst = classroom[0];
classroom.shift();
console.log(newFirst);


console.log('# Challenge #11');

// Now add 'Ginny' to the _start_ of the list and console out the new length of the array.
classroom.unshift('Ginny');
console.log(classroom.length);


console.log('# Challenge #11');

// Now add 'Yury' to the start of the list and console out the _new_ new length of the array.

classroom.unshift('Yury');
console.log(classroom.length);


console.log('# Challenge #12');

// Now console out the whole list. You should only need one `console.log`, although you may have to click the arrow to see the whole list.

// It should be the entire list of students minus yourself, with 'Colin' and 'Mesuara' replaced with 'Yury' and 'Ginny'. In other words, the list of people you'll be around in Term 2!

console.log(classroom);