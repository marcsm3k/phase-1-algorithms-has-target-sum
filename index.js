  function hasTargetSum(arr, tarNum) {

    for (let i = 0; i < arr.length; i++) {

      const comNum = tarNum - arr[i];

      for (let j = i + 1; j < arr.length; j++) {

        if (arr[j] === comNum) return true;
      }
    }
    return false;
  }


/* 
  Write the Big O time complexity of your function here

  Nested Loops? I believe this is 0(n^2)
*/

/* 
  need to iterate over an array of numbers 
  
  for each number(element) look for another number(element) and add them. 
  If it is the target number then true. 

  keep iterating through the array and do the same

  if not we reach end of the array and return false 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
