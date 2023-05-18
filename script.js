// завдання 1 

function numbers (a, b, c) {
    return  a < b && b < c;
};
alert(numbers(48, 48, 40));

// завдання 2

let x = 1;
let y = 2;

let res1 = x + '' + y;
console.log(res1);
console.log(typeof res1);

let res2 = (!!x) + '' + y;
console.log(res2);
console.log(typeof res2);

let res3 = !!(x + y);
console.log(res3); 
console.log(typeof res3);

let res4 = x.toString - y;
console.log(res4); 
console.log(typeof res4); 

// завдання 3

let isAdult = prompt('введіть свій вік', '');

if (isAdult >= 18) {
    alert('Ви досягли повнолітнього віку');
} else {
    alert('Ви ще надто молоді');
};

// завдання 4

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

let sorted = arr.sort((a, b) => {
             arr.filter(num => {num === a})
                .length - arr.filter(num => {num === b})
                .length
});

let number = sorted[sorted.length - 1];
let newArr = [number];

let sortedArray = arr.filter(num => {
    return num !== number
});

console.log(sortedArray);
console.log(newArr);

// завдання 5

let a = +prompt('a', '');
let b = +prompt('b', '');
let c = +prompt('c', '');

if (a <= 0 || b <= 0 || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    alert ('Incorrect data');
};

if (a > 0 && b > 0 && c > 0) {
    let p = (a + b + c) / 2;
    let s = Math.sqrt(p *(p - a) * (p - b) * (p - c));

    console.log('Площа трикутника:' + s.toFixed(3));

    let isRightTriangle =  a ** 2 + b ** 2 == c ** 2
    || a ** 2 + c ** 2 == b ** 2
    || b ** 2 + c ** 2 == a ** 2;

    console.log ('трикутник ' + (isRightTriangle ? 'прямокутний' : 'не прямокутний'));
};

// завдання 6

function calc(a, b, op) {
    switch (op) {
        case 1 :
            return a - b;
            break;
        case 2 :
            return a * b;
            break;
        case 3 :
            return a / b; 
            break;
        default :
            return a + b;
    }
};

// завдання 7

function findUnique(arr) {
    let unique = Array.from(new Set(arr));
    return arr.length === unique.length;
};

alert(findUnique([1, 2, 3, 5, 3]));
alert(findUnique([1, 2, 3, 5, 11]));

// додаткове завдання

function create(str) {
    return function(str1) {
       return str === str1;
    }
};

const tom = create("pass_for_Tom");
alert(tom("pass_for_Tom")); 
alert(tom("pass_for_tom"));