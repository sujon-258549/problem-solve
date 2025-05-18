// problem1...........................................
// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 22, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Fiona", age: 27, gender: "female" },
  { name: "George", age: 40, gender: "male" },
  { name: "Hannah", age: 24, gender: "female" },
  { name: "Ian", age: 29, gender: "male" },
  { name: "Jack", age: 31, gender: "male" },
];

const getMale = (people) => {
  const OtherPeopleArray = people
    .filter((parson) => parson.gender !== "female")
    .map((person) => person.name);
  return OtherPeopleArray;
};

// const inputPeople =
// console.log(inputPeople);
getMale(people);

// problem2..........................................................

// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
  { title: "Jane Eyre", author: "Charlotte Brontë", year: 1847 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
  { title: "Wuthering Heights", author: "Emily Brontë", year: 1847 },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866 },
  { title: "The Odyssey", author: "Homer", year: -700 },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", year: 1880 },
  { title: "Anna Karenina", author: "Leo Tolstoy", year: 1878 },
  { title: "A Tale of Two Cities", author: "Charles Dickens", year: 1859 },
  { title: "The Divine Comedy", author: "Dante Alighieri", year: 1320 },
  { title: "Don Quixote", author: "Miguel de Cervantes", year: 1605 },
  { title: "Les Misérables", author: "Victor Hugo", year: 1862 },
];

const allBooks = (books) => {
  const booKTitle = books.map((book) => book.title);
  return booKTitle;
};

allBooks(books);

// Problem 3................................................
// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const squareNumber = (num) => {
  return num * num;
};
const doubleNumber = (num) => {
  return num * 2;
};

const fivePulseNumber = (num) => {
  return num + 5;
};

const total = (number) => {
  return fivePulseNumber(doubleNumber(squareNumber(number)));
};
total(10);

// problem 4 ............................................
const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Ford", model: "Focus", year: 2018 },
  { make: "Chevrolet", model: "Cruze", year: 2010 },
  { make: "BMW", model: "3 Series", year: 2020 },
  { make: "Audi", model: "A4", year: 2016 },
  { make: "Nissan", model: "Sentra", year: 2014 },
  { make: "Hyundai", model: "Elantra", year: 2013 },
  { make: "Kia", model: "Forte", year: 2017 },
  { make: "Mazda", model: "Mazda3", year: 2011 },
];

const sortYear = (cars) => {
  const carSortYear = cars.sort(
    (firstCar, secondCar) => firstCar.year - secondCar.year
  );
  return carSortYear;
};

// console.log(sortYear(cars));

// problem 5..................................................
// 5.Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [12, 12, 6, 2, 3, 3, 12, 12, 14];

const totalNumber = (number) => {
  const sum = number.reduce((acc, num) => {
    return acc + num;
  }, 0);
  return sum;
};

const duplicateValue = (array) => {
  const set = new Set(array);
  return Array.from(set);
};

// max Number

const max = Math.max(...numbers);
console.log(max);
