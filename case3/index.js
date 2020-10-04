/*

  Problem 3: Extract proper values out of a valid object given some valid traversable path

*/

const Assert = require('assert');

let someData = {
    a: {
        b: {
            nested: true
        },
    },
    x: {
        y: 'z',
    }
};

const searchForKey = (someObj, path, pathDelimiter = ".") => {
  if(!Boolean(someObj) || !Boolean(path) || typeof(path) !== "string") return null;
  if(!Object.getPrototypeOf(someObj) === Object.getPrototypeOf({})) return null;
  let currObj = someObj;
  for(subKey of path.split(pathDelimiter)) {
    currObj = currObj[subKey];
    if(!Boolean(currObj)) return null;
  }
  return currObj;
}

// Test Cases - <actual, expected> order of tests

// Invalid Scenarios
Assert.equal(searchForKey(null, null), null);
Assert.equal(searchForKey(undefined, 'a.b'), null)
Assert.equal(searchForKey(-1), null, undefined);
Assert.equal(searchForKey([], 'x.y.z'), null);
Assert.equal(searchForKey(new Date(), -1), null);
Assert.equal(searchForKey("hello world!", 'y.z'), null);


// Valid Scenarios - <actual, expected> order
Assert.equal(searchForKey({}, 'x/y', "/"), null);
Assert.equal(searchForKey(someData, 'x/y', "/"), "z");
Assert.equal(searchForKey(someData, 'a/b/nested', "/"), true);
Assert.equal(searchForKey(someData, 'x/y/z', "/"), null);

console.log(`All Tests Working as Expected !`);
