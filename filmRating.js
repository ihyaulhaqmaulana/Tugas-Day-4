// Buatlah script untuk menentukan rating suatu film, dengan ketentuan sebagai berikut:

// Jika usia yang dimasukkan lebih atau sama dengan 21, maka rating film adalah DEWASA.
// Jika usia yang dimasukkan lebih atau sama dengan 13, maka rating film adalah REMAJA.
// Jika usia yang dimasukkan lebih atau sama dengan 9, maka rating film adalah BIMBINGAN ORANG TUA.
// Jika usia yang dimasukkan kurang dari 9, maka rating film adalah SEMUA USIA.

// CONTOH
// Input: 15
// Output: Remaja

// Input: 32
// Output: Dewasa

// =============================================================

function filmRating(age) {
  if (age >= 21) {
    return "Dewasa";
  } else if (age >= 13) {
    return "Remaja";
  } else if (age >= 9) {
    return "Bimbingan Orang Tua";
  } else {
    return "Semua Usia";
  }
}
