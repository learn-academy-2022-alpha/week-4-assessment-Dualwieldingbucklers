// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest





// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("weDontTalkAboutPurpleOrChartreuse", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    expect(weDontTalkAboutPurpleOrChartreuse(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(weDontTalkAboutPurpleOrChartreuse(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

//FAILURE
// ● weDontTalkAboutPurpleOrChartreuse › takes in an array, removes the first item from the array and shuffles the remaining content.
//   ReferenceError: weDontTalkAboutPurpleOrChartreuse is not defined

// b) Create the function that makes the test pass.

//PSEUDOCODE
//1. Create a function called weDontTalkAboutPurpleOrChartreuse that takes in an array as a parameter.
//2. Use the .shift built in method to remove the value at index zero.
//3. Assign the variable n to the original array length.
//4. Create a new array to push randomly indexed values from the original array into.
//5. Make a while loop to run as long as there are values in the array
//6. Splice single randomly indexed values and push them onto the new array.
//7. Return a flattened version of the new array (to get rid of the array of single item arrays)

const weDontTalkAboutPurpleOrChartreuse = (array) => {
array.shift()
var n = array.length
var newArr = []
    while (array.length > 0) {
      newArr.push(array.splice(Math.floor(Math.random() * n--), 1))
    }
  return newArr.flat(1)
}

//PASS





// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe("austinWalkerSaysHeAppreciatesLongFunctionNamesAndHeCannotLie", () => {
  it("takes a numerical array and returns an array of the minimum and maximum numbers respectively", () => {
    expect(austinWalkerSaysHeAppreciatesLongFunctionNamesAndHeCannotLie(nums1)).toEqual([-8, 90])
    expect(austinWalkerSaysHeAppreciatesLongFunctionNamesAndHeCannotLie(nums2)).toEqual([5, 109])
  })
})

//FAILURE
// ● austinWalkerSaysHeAppreciatesLongFunctionNamesAndHeCannotLie › takes a numerical array and returns an array of the minimum and maximum numbers respectively
//  ReferenceError: austinWalkerSaysHeAppreciatesLongFunctionNamesAndHeCannotLie is not defined

// b) Create the function that makes the test pass.

//PSEUDOCODE
//1. Create a function with an obnoxious name that takes in an array as a parameter.
//2. Create a new array to store the minimum and maximum values.
//3. Run a Math.min and Math.max and push the acquired values onto the new array in that order.
  //I read that Math.min/max don't work on arrays, but the spread syntax will make it work.
//4. Return the new array.

const austinWalkerSaysHeAppreciatesLongFunctionNamesAndHeCannotLie = (array) => {
  var newArr = []
  newArr.push(Math.min(...array))
  newArr.push(Math.max(...array))
  return newArr
}

//PASS





// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("singlesOnly", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(singlesOnly(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

//FAILURE
// ● singlesOnly › takes in two arrays as arguments and returns one array with no duplicate values
//   ReferenceError: singlesOnly is not defined

// b) Create the function that makes the test pass.

//PSEUDOCODE
//1. Decalre a function that takes in two arrays as parameters.
//2. Concatenate both arrays and store them on a variable.
//3. Declare a new variable to store the filtered concatenated array on
//4. Have the filter use the value and index parameters
//5. Inside the function of the filter, use index of each iterated variable to be its only index by making it strictly equals to its current index.
//6. Return the filtered array.

const singlesOnly = (arr1, arr2) => {
  arr1 = arr1.concat(arr2)
  var newArr = arr1.filter((v, i) => {
    return arr1.indexOf(v) === i
  })
  return newArr
}

//PASS
