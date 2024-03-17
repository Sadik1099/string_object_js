// object js---------

const age = 21;
const school = "Sonakhuli H.Z high school";
const isPassed = true;

let isDeveloper;

// object ---> non-premetive
const bottle = {
    brand: 'Apple',
    price: 45,
    color: 'white',
    isClean: false
};

const subject = {
    name: 'biology',
    techer: 'Md. masud',
    examDate : '25 Feb',
    chapters: ['first', 'second', 'third'],
    exams: {
        name: 'final Exam',
        mark: 100,
    }
}

// console.log(subject);
// console.log(subject.exams);

// bracket Notation --------

// console.log(bottle['brand']);

// -------object keys-------
// const keys = Object.keys(subject);
// console.log(keys);

// //  ----------object values -----
// const values = Object.values(subject);
// console.log(values);

//  object loop -------------------
//  for of: array
// for in : Object
for(const prop in bottle){
    console.log(prop, ":", bottle[prop] );
    //console.log(bottle[prop]);
}

const keys = Object.keys(bottle);
console.log(keys);

const values = Object.values(bottle);
console.log(values);

// for( const value of values ){
//     console.log(value);
// }
for( const key of keys){
    console.log(key, ":",bottle[key]);
}
const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}
 