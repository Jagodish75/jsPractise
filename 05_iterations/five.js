// const myArr = ["jagodish", "kartick", "Gonesh", "lata"];
// myArr.forEach((item, index, array) => {
//     console.log(index, item, array);
// });

// const myArray = [
//     { name: "Kartick", roll: 1 },
//     { name: "Gonesh", roll: 2 },
//     { name: "Jagodish", roll: 3 },
// ];
// myArray.forEach((item) => {
//     console.log(item.name);
// });

// const coding = ["js", "ruby", "java", "python"];

// coding.forEach((item, index, array) => {
//     console.log(index, item, array);
// });

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js",
//     },
//     {
//         languageName: "java",
//         languageFileName: "java",
//     },
//     {
//         languageName: "python",
//         languageFileName: "py",
//     },
// ];

// myCoding.forEach((item) => {
//     console.log(item.languageFileName);
// });

// forEach loop dont return any value
// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//     //console.log(item);
//     return item;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//     return num > 4;
// });
// console.log(newNums);

// let newNums = [];
// myNums.forEach((item) => {
//     if (item > 4) {
//         newNums.push(item);
//     }
// });

// console.log(newNums);

const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
    { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
    { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
    { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
    { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
    { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
// const joy = books.filter((item) => {
//     return item.genre === "History" && item.publish >= 1995;
// });

// console.log(joy);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumers.map((item) => {
//     return item + 10;
// });
const newNums = myNumers
    .map((item) => {
        return item * 10;
    })
    .map((item) => {
        return item + 1;
    })
    .filter((item) => {
        return item >= 40;
    });
console.log(newNums);
