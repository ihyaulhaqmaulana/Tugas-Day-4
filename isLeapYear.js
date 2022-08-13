// Buatlah script untuk menentukan suatu tahun merupakan tahun kabisat atau bukan.

// CONTOH
// Input: 1900
// Output: Bukan kabisat

// Input: 2000
// Output: Kabisat

// Input: 2001
// Output: Bukan kabisat

// Input: 2016
// Output: Kabisat

// ================================================================

function isLeapYear(year) {
  if (year % 4 == 0 && year % 400 == 0) {
    return "Kabisat";
  }

  return "Bukan kabisat";
}
console.log(isLeapYear(1900));
