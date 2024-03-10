const mergeSortedArray = require("./mergeSortedArray");

// test case 1. General case
test("test case 1 ", () => {
  // Arrange
  const arr1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const arr2 = [2, 5, 6];
  const n = 3;

  // Act
  mergeSortedArray(arr1, m, arr2, n);

  // Assert
  expect(arr1).toEqual([1, 2, 2, 3, 5, 6]);
});

// // test case 2. arr1 is empty
// test("test case 2(array1 is emtpy) ", () => {
//   const arr1 = [];
//   const m = 0;
//   const arr2 = [2];
//   const n = 1;
//   // Act
//   mergeSortedArray(arr1, m, arr2, n);
//   // Assert
//   expect(arr1).toEqual([2]);
// });

// // test case 3. arr2 is empty
// test("test case 2(array1 is emtpy) ", () => {
//   const arr1 = [1, 3];
//   const m = 2;
//   const arr2 = [];
//   const n = 0;
//   // Act
//   mergeSortedArray(arr1, m, arr2, n);
//   // Assert
//   expect(arr1).toEqual([1, 3]);
// });

// // test case 4. arr1 and arr2 are both empty
// test("test case 2(array1 is emtpy) ", () => {
//   const arr1 = [];
//   const m = 0;
//   const arr2 = [];
//   const n = 0;
//   // Act
//   mergeSortedArray(arr1, m, arr2, n);
//   // Assert
//   expect(arr1).toEqual([]);
// });
