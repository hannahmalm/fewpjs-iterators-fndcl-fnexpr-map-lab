const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//Each line in tutorials is an array
// the first letter of each word should be capitalized. 
//Iterate over each word in scentence
// find the first letter in each word - string.toUpper
//1. Map over each title and explicitly return 
const titleCased = () => {
  return tutorials.map (title => {
  // split the title into individual words, define the words as a variable  
  const words = title.split(' ');
  //iterate over the words using .map 
  //1. find the first character using charAt(0)
  //2. Take this character and use to uppercase
  //3. The slice() method returns a shallow copy of a portion of an array into a new array object 
    //The original array will not be modified
  //4. In this case, word.slice(1) slices the first letter of each word 
    //If you dont add in the word.slice(1) it will print "W I J" instead of "What Is JSON"
    //Need slice to add the words back
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  // rejoins the capitalized words together into a new title
  const newTitle = capitalizedWords.join(' ');
  // use the .map method on the tutorials to return a new array
  return newTitle;});
}


//Array.prototype.map()
// When the parameter list is only one element, we can drop () !
//const students = ["harry", "ron", "hermione", "ginevra"];
//const rollCall = students.map(student => student + " the wizard");
//=> rollCall = ["harry the wizard", "ron the wizard", "hermione the wizard", "ginevra the wizard"];
