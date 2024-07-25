// 1. 10 хүртэлх натурал тоог хэвлэх программ бич

// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }

// 2. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич

// for (let i = 1; i <= 10; i = i + 2){
//     console.log(i)
// }

// 3. 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич

// for (let i = 0; i <= 10; i = i + 2){
//     console.log(i)
// }

// 4. 100 хүртэлх натурал тооны нийлбэрийг олох программ бич

// let sum = 0;
// for (let i = 0; i <= 100; i++){
//     sum = sum + i
// }
// console.log(sum)

// 5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич

// let n = 20;
// let sum = 0;
// for (let i = 0; i <= n; i++){
//     console.log(i)
//     sum = sum + i
// }
// console.log(sum)

// 6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич

// let num = 7;
// let isPrime = true;
// if (num <= 1){
//     isPrime = false;
// }else{
//     for(let i = 2; i < num; i++){
//         if (num % i === 0){
//             isPrime = false;
//             break;
//         }
//     }
// }
// if (isPrime){
//     console.log(num + ' is a prime number')
// }else {
//     console.log(num + ' is not a prime number')
// }

// 7. Өгөгдсөн интервал дахь анхны тоог хэвлэх программ бич

// 8. N тооны факториал олох программ бич

// let n = 5;
// let sum = 1;
// for (let i = 1; i <= n; i++) {
//     sum = sum * i;
// }
// console.log(sum)

// 9. Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич

// let num = 6877
// let strNum = num.toString()
// let sum = 0

// for (let i = 0; i < strNum.length; i++){
//     sum = sum + Number(strNum[i]);
// }
// console.log(sum)

// 10. N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич

// let n = 10;
// let sum = 0;
// for (let i = 1; i <= n; i = i + 2){
//     console.log(i)
//     sum = sum + i
// }
// console.log(sum)

// 11. N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич

// let n = 10;
// let sum = 0;
// for (let i = 0; i <= n; i = i + 2) {
//   console.log(i);
//   sum = sum + i;
// }
// console.log(sum);

// 12. Өгөгдсөн  эерэг тооны урвууг хэвлэх программ бич // 123 <=> 321

// let num = 123;
// let strNum = num.toString();
// let reverse = '';

// for (let i = strNum.length - 1; i >= 0; i--){
//     reverse += strNum[i]
// }
// console.log(reverse)

// 13. Өгөдсөн тооны цифрүүдийг үгээр хэвлэх программ бич

// let num = 123;
// let strNum = num.toString();
// let result = "";

// for (let i = 0; i < strNum.length; i++) {
//     if (Number(strNum[i]) === 0) {
//         result += "zero";
//     } else if (Number(strNum[i]) === 1) {
//         result += "one";
//     } else if (Number(strNum[i]) === 2) {
//         result += "two";
//     } else if (Number(strNum[i]) === 3) {
//         result += "three";
//     }
// }
// console.log(result);

// 14. prompt ашиглан n -д утга орууlахад palindrome тоо мөн эсэхийг шалгах.
// Example1 : input: 111, output: true
// Example2 : input: 110, output: false
// Example3 : input: 101, output: true
// https://en.wikipedia.org/wiki/Palindromic_number

// let n = prompt('too oruul: ');
// let strN = n.toString();
// let result = "";
// for (let i = strN.length - 1; i >= 0; i--) {
//   result += strN[i];
// }
// if (strN == result) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 15 1-100 ийн хооронд random оор 1 утга авдаг randomNumber гэсэн variable зарлана уу.
// 15.1 Prompt ашиглан 1 утга аваад тэр тоог таах хүртэл зогсолтгүй ажиллах loop бичээргэй.
// 15.2 Хэрвээ prompt - оос авсан утга нь randomNumber оос их бол "таны оруулсан тоо их байна" г.м чиглүүлэх маягаар хэвлэдэг байх.

// 16. Давхар давталт 1
// Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
// Input: 5
// Output:
// - 1
//  - 1 2
//  - 1 2 3
//  - 1 2 3 4
//  - 1 2 3 4 5

// 17. Давхар давталт 2
// Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
// Input: 5
// Output:
// - 5 4 3 2 1
// - 5 4 3 2
// - 5 4 3
// - 5 4
// - 5

// 18. Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result
// (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from
// 1 to 10 (100 results total).

// 19. Using a for loop print all even numbers up to and including n. Don’t include 0.

// let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

// 20. Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.

// let str1 = "javascript";
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
