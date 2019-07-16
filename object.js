console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var person = {
  firstName: 'Asma',
  lastName: 'Alfauri',
  age: 26,
  dob: '25/12/1992',
  food: ['sea food', 'kabseh', 'maglobeh'],
  movie: ['gone girls', 'split', 'twilight', 'Harry potter', 'secret Window']
};

console.log(person.firstName)
console.log(person.lastName)
console.log(person.movie)


var persons = [{
    name: {
      first: 'John',
      last: 'Hob'
    },
    age: 35
  },
  {
    name: {
      first: 'Alex',
      last: 'Mercer'
    },
    age: 25
  },
  {
    name: {
      first: 'Alice',
      last: 'Zaheer'
    },
    age: 24
  },
  {
    name: {
      first: 'Zues',
      last: 'Odin'
    },
    age: 55
  },
  {
    name: {
      first: 'Soso',
      last: 'Al-Amora'
    },
    age: 67
  }
];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 
'Thor', 'Soso']
*/
function firstName(array) {
  for (i = 0; i < persons.length; i++) {
    console.log(persons[i].name.first)
  }
}
firstName(persons)
// persons is array not object

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
function averageAge(x) {
  var sum = 0
  for (i = 0; i < x.length; i++) {
    sum += x[i].age
    var avg = sum / x.length
  }
  console.log(avg)
}
averageAge(persons)

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson(x) {
  var xMax = x[0].age
  var xNameFirst = x[0].name.first
  var xNameLast = x[0].name.last
  for (i = 0; i < x.length; i++) {
    if (xMax < x[i].age) {
      xMax = x[i].age
      xNameFirst = x[i].name.first
      xNameLast = x[i].name.last
    }
  }
  return xNameFirst + ' ' + xNameLast
}
console.log(olderPerson(persons))


/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/


function longestPerson(x) {

  var xNameFirst = x[0].name.first
  var xNameLast = x[0].name.last
  var xMax = xNameFirst.length + xNameLast.length
  for (i = 0; i < x.length; i++) {
    if (xMax < (x[i].name.first.length + x[i].name.last.length)) {
      xMax = x[i].name.first.length + x[i].name.last.length
      xNameFirst = x[i].name.first
      xNameLast = x[i].name.last
    }
  }
  return xNameFirst + ' ' + xNameLast
}
console.log(longestPerson(persons))

// function longestName (x){
//   xMaxFirst=x[0].name.first
//   xMaxLast=x[0].name.last
//   xMax=xMaxFirst.length+xMaxLast.length
//   for (i = 0; i < x.length; i++) {
//    var xCompareFirst=x[i].name.first
//    var xComparelast=x[i].name.last
//    var xCompare= xCompareFirst.length + xComparelast.length
//     if (xMax < xCompare) {
//       xMax = xCompare
//       xMaxFirst=x[i].name.first
//       xMaxLast=x[i].name.last
//     }
//   }
//   return xMaxFirst +' '+ xComparelast
// }
// console.log(longestName(persons))
/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(x) {
  var xMaxFirst = x[0].name.first
  var xMaxLast = x[0].name.last
  var xMax = xMaxFirst.length + xMaxLast.length
  for (i = 0; i < x.length; i++) {
    var xCompareFirst = x[i].name.first
    var xComparelast = x[i].name.last
    var xCompare = xCompareFirst.length + xComparelast.length
    if (xMax < xCompare) {
      xMax = xCompare
      xMaxFirst = x[i].name.first
      xMaxLast = x[i].name.last
    }
  }
  return xMaxFirst + ' ' + xComparelast
}
console.log(longestName(persons))
//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word 
repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name name is alex mercer class name B baba 
mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord(str1) {
  var strNew = str1.toLowerCase()
  var str = strNew.split(" ")
  var obj = {}
  for (i = 0; i < str.length; i++) {
    var count = 0
    for (j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count += 1
      }
    }
    obj[str[i]] = count
  }
  return obj
}
console.log(repeatWord("My name name is alex mercer class name B baba mama hello Hello HELLO"))


// function repeatWord(str) {
//   var newString = str.toLowerCase();
//   var splitString = newString.split(" "); //as array
//   var obj = {};
//   for (var i = 0; i < splitString.length; i++) { //to fill keys
//     var count = 0;
//     for (var j = 0; j < splitString.length; j++) { //to fill values
//       if (splitString[i] === splitString[j]) {
//         count += 1;
//       }
//     }
//     obj[splitString[i]]=count; //to fill keys and values on obj
//   }
//   return obj
// }
// console.log(repeatWord("My name name is alex mercer class name B baba mama hello Hello HELLO"))

/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(str1) {
  var strNew = str1.toLowerCase()
  var str = strNew.split("")
  var obj = {}
  for (i = 0; i < str.length; i++) {
    var count = 0
    for (j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count += 1
      }
    }
    obj[str[i]] = count
  }
  return obj
}
console.log(repeatChar("mamababatetacedo"))


/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3 , faaa:5}, ['a', 'cat'])
=>  {a: 1, cat: 3}
*/




// function selectFromObject(obj, array) {
//   var objNew = {};
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length; j++) {
//       if (array[i] === obj.j) {
//         objNew += [obj.j]
//       }
//     }
//   }
//   return objNew
// }
// console.log(selectFromObject({
//   a: 1,
//   cat: 3,
//   faaa: 5
// }, ['a', 'cat', 'd']))


// Ex: selectFromObject({a: 1, cat: 3 , faaa:5}, ['a', 'cat', 'ahamd'])
// =>  {a: 1, cat: 3}

function selectFromObject(obj, array) {
  var arrElement;
  var newObj = {};

  for (var i = 0; i < array.length; i++) {
    arrElement = array[i];
    if (obj[arrElement]) { // defind the common elements
      newObj[arrElement] = obj[arrElement];
    }
  }

  return newObj;
}
console.log(selectFromObject({
  a: 1,
  cat: 3,
  faaa: 5
}, ['a', 'cat', 'ahamd']))



//other way :
function selectFromObject1(obj, arr) {
  var objNew = {}
  for (i = 0; i < arr.length; i++) {
    for (var key in obj) {
      if (arr[i] === key) {
        objNew[arr[i]] = obj[key]
      }
    }
  }
  return objNew
}
console.log(selectFromObject1({
  a: 1,
  cat: 3,
  faaa: 5
}, ['a', 'cat', 'ahamd']))



/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24 , sport:'football'})
=> ["firstName","Moh","age",24]
*/
function objectToArray(obj) {
  var arr = []
  var i = 0
  for (var key in obj) {
    arr[i] = key
    arr[i + 1] = obj[key]
    i += 2
  }
  return arr
}
console.log(objectToArray({
  firstName: "Moh",
  age: 24,
  sport: 'football',
  tall: 170,
  movies: ['the revenant', 'pain and gain']
}))
/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
function arrayToObject(arr) {
  var obj = {}
  var i = 0
  for (i = 0; i < arr.length; i++) {
    obj = arr[i]
  }
  return arr
}
console.log(arrayToObject({
  firstName: "Moh",
  age: 24,
  sport: 'football',
  tall: 170,
  movies: ['the revenant', 'pain and gain']
}))
/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/


/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/


/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/


/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/


/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/


/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/


/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/


/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/


/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/