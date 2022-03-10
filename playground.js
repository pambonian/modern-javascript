// testing 321

let data = { foo: 8, bar: 32, baz: 7 };

console.log(data.baz);

let newData = { 1: 'Joe', 2: 'Bob', 3: 'Jim' }

for (const key in newData) {
    console.log(`${key}: ${newData[key]}`)
}

function printNums(nums) {
    nums.forEach(num => console.log(num));
}
let numData = [89, 5, 3, 54, 23];
printNums([numData])

let foo = [1, 3, 8]; let bar = [44, 99];
let baz = [...foo, ...bar];
console.log(baz);

var numArr = [3, 8, 23, 55, 10];
numArr.push(9);
console.log(numArr);

let ps = document.querySelectorAll("p");
Array.from(ps).forEach(function (p) {
    if (p.textContent.indexOf("this text should be invisible.") >= 0) {
        p.style.display = "none";
    }
    if (p.textContent.indexOf("this text should be bold") >= 0) {
        p.style.fontWeight = 'bold';
    }
});

// additional comment

// const divs = document.querySelectorAll("div");
// const searchText = "foo";
// for (const div of divs) {
//   if (div.textContent.includes(searchText)) {
//     console.log(div.textContent)
//   }
// }