// // // // // // // let display = document.querySelector('.button');
// // // // // // // let buttons=document.querySelectorAll('button');
// // // // // // //  const operator=['%', '*' , '/' , '-' , '+' , '=' ];
// // // // // // //   let output="";



// // // // // // // function calculate(btnValue) {
// // // // // // //     display.focus();
// // // // // // //     if (btnValue === '=' && output == '') {
// // // // // // //         output = eval(output.replace('%', '/100'));
// // // // // // //     } else if (btnValue === 'AC') {
// // // // // // //         output = '';
// // // // // // //     }
// // // // // // //     else if (btnValue === 'DEL') {
// // // // // // //         output = output.slice(0, -1);
// // // // // // //     }
// // // // // // //     else if b(tnValue==='='){
// // // // // // //         try{
// // // // // // //             output = eval(output);

// // // // // // //         }catch(error){
// // // // // // //             output='error'
// // // // // // //         }
// // // // // // //     }else {
// // // // // // //     //     if (output === '' && operator.includes(btnValue)) return;
// // // // // // //     //     output += btnValue;
// // // // // // //     // }
// // // // // // //     output += btnValue
// // // // // // // }
// // // // // // // display.value = output;
// // // // // // // }
// // // // // // // buttons.forEach((button)=>{
// // // // // // //     button.addEventListener('click',()=> calculate(e.target.textContent));

// // // // // // // })



// // // // // // // // const type=document.createAttribute('type');

// // // // // // // // type.value='button';
// // // // // // // // buttons.setAttributeNode(type);

// // // // // // // // function insert(num){
// // // // // // // //     document.input.button.data-value=document.input.button.data-value+num;
// // // // // // // // }
// // // // // // document.querySelectorAll('button').forEach(button => {
// // // // // //     button.addEventListener('click', () => {
// // // // // //         const value = button.textContent;
// // // // // //         if (value !== 'AC' && value !== 'DEL' && value !== '=') {
// // // // // //             document.querySelector('.display').value += value;
// // // // // //         }
// // // // // //     });
// // // // // // });
// // // // // document.querySelectorAll('button').forEach(button => {
// // // // //     button.addEventListener('click', () => {
// // // // //         const value = button.textContent;
// // // // //         if (value === '=') {
// // // // //             const inputValue = document.querySelector('.display').value;
// // // // //             try {
// // // // //                 const result = eval(inputValue);
// // // // //                 document.querySelector('.display').value = result;
// // // // //             } catch (error) {
// // // // //                 document.querySelector('.display').value = 'Error';
// // // // //             }
// // // // //         } else if (value !== 'AC' && value !== 'DEL') {
// // // // //             document.querySelector('.display').value += value;
// // // // //         }
// // // // //     });
// // // // // });
// // // // document.querySelectorAll('button').forEach(button => {
// // // //     button.addEventListener('click', () => {
// // // //         const value = button.textContent;
// // // //         const display = document.querySelector('.display');

// // // //         if (value === 'AC') {
// // // //             display.value = '';
// // // //         } else if (value === 'DEL') {
// // // //             display.value = display.value.slice(0, -1);
// // // //         } else if (value === '=') {
// // // //             try {
// // // //                 const result = eval(display.value);
// // // //                 display.value = result;
// // // //             } catch (error) {
// // // //                 display.value = 'Error';
// // // //             }
// // // //         } else {
// // // //             display.value += value;
// // // //         }
// // // //     });
// // // // });
// // // document.querySelectorAll('button').forEach(button => {
// // //     button.addEventListener('click', () => {
// // //         const value = button.textContent;
// // //         const display = document.querySelector('.display');
// // //         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

// // //         if (value === 'AC') {
// // //             display.value = '';
// // //         } else if (value === 'DEL') {
// // //             display.value = display.value.slice(0, -1);
// // //         } else if (value === '=') {
// // //             try {
// // //                 const result = eval(display.value);
// // //                 display.value = result;
// // //             } catch (error) {
// // //                 display.value = 'Error';
// // //             }
// // //         } else if (isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) {
// // //             // Jika karakter terakhir bukan angka dan nilai tombol juga bukan angka
// // //             // Maka tidak melakukan apa-apa untuk menghindari penumpukan operator
// // //         } else {
// // //             display.value += value;
// // //         }
// // //     });
// // // });



// // document.querySelectorAll('button').forEach(button => {
// //     button.addEventListener('click', () => {
// //         const value = button.textContent;
// //         const display = document.querySelector('.display');
// //         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

// //         if (value === 'AC') {
// //             display.value = '';
// //         } else if (value === 'DEL') {
// //             display.value = display.value.slice(0, -1);
// //         } else if (value === '=') {
// //             try {
// //                 const result = eval(display.value);
// //                 display.value = result;
// //             } catch (error) {
// //                 display.value = 'Error';
// //             }
// //         } else if (isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) {
// //             // Jika karakter terakhir dan nilai tombol bukan angka
// //             // Maka ganti operator terakhir dengan operator baru
// //             display.value = display.value.slice(0, -1) + value;
// //         } else {
// //             display.value += value;
// //         }
// //     });
// // });



// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 const result = eval(display.value);
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             // Jika karakter terakhir dan nilai tombol bukan angka, atau jika tombol adalah "%" dan karakter terakhir adalah "%"
//             // Maka ganti operator terakhir dengan operator baru
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             display.value += value;
//         }
//     });
// });


// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 const result = eval(display.value);
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             // Jika karakter terakhir dan nilai tombol bukan angka, atau jika tombol adalah "%" dan karakter terakhir adalah "%"
//             // Maka ganti operator terakhir dengan operator baru
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             display.value += value;
//         }
//     });
// });

// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         // Modifikasi bagian ini
//         if (value === ',') {
//             // Ganti tanda koma (",") dengan tanda titik (".")
//             display.value += '.';
//         } else if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
//                 const result = eval(display.value.replace(/,/g, '.'));
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             display.value += value;
//         }
//     });
// });

// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === ',') {
//             // Periksa apakah tanda koma sudah ada di ekspresi sebelum menambahkannya
//             if (!display.value.includes(',')) {
//                 display.value += '.';
//             }
//         } else if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
//                 const result = eval(display.value.replace(/,/g, '.'));
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             display.value += value;
//         }
//     });
// });


// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === ',') {
//             // Periksa apakah tanda koma sudah ada dalam bagian desimal dari ekspresi
//             const decimalPart = display.value.split('.')[1];
//             if (!decimalPart) {
//                 display.value += '.';
//             }
//         } else if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
//                 const result = eval(display.value.replace(/,/g, '.'));
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             display.value += value;
//         }
//     });
// });






// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === ',') {
//             // Periksa apakah tanda koma sudah ada dalam ekspresi
//             if (!display.value.includes(',')) {
//                 display.value += '.';
//             }
//         } else if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
//                 const result = eval(display.value.replace(/,/g, '.'));
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             display.value += value;
//         }
//     });
// });

// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === ',') {
//             // Periksa apakah ada tanda koma setelah operator terakhir dalam ekspresi
//             const operators = ['+', '-', '*', '/'];
//             let hasCommaAfterLastOperator = false;
//             for (let i = display.value.length - 1; i >= 0; i--) {
//                 const char = display.value[i];
//                 if (operators.includes(char)) {
//                     break;
//                 } else if (char === ',') {
//                     hasCommaAfterLastOperator = true;
//                     break;
//                 }
//             }

//             // Jika tidak ada tanda koma setelah operator terakhir, tambahkan tanda koma
//             if (!hasCommaAfterLastOperator) {
//                 display.value += '.';
//             }
//         } else if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
//                 const result = eval(display.value.replace(/,/g, '.'));
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             display.value += value;
//         }
//     });
// });

// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === ',') {
//             // Periksa apakah karakter terakhir adalah angka
//             if (!isNaN(parseInt(lastChar))) {
//                 // Periksa apakah ada tanda titik di dalam angka terakhir
//                 const lastNumber = display.value.split(/[+\-*/]/).pop(); // Ambil angka terakhir
//                 if (!lastNumber.includes('.')) {
//                     display.value += '.';
//                 }
//             }
//         } else if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
//                 const result = eval(display.value.replace(/,/g, '.'));
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             // Jika operator ditambahkan, izinkan pengguna untuk menggunakan tanda titik lagi
//             if (['+', '-', '*', '/'].includes(value)) {
//                 display.value += value;
//             } else if (!isNaN(parseInt(value))) {
//                 // Jika angka ditambahkan, periksa apakah karakter terakhir adalah operator
//                 if (['+', '-', '*', '/'].includes(lastChar)) {
//                     display.value += value;
//                 } else {
//                     // Periksa apakah karakter terakhir adalah angka dengan desimal
//                     if (lastChar.includes('.')) {
//                         // Jika angka sebelumnya sudah memiliki desimal, jangan tambahkan lagi
//                         display.value += '';
//                     } else {
//                         display.value += value;
//                     }
//                 }
//             }
//         }
//     });
// });

// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === ',') {
//             // Periksa apakah karakter terakhir adalah angka
//             if (!isNaN(parseInt(lastChar))) {
//                 // Periksa apakah ada tanda titik di dalam angka terakhir
//                 const lastNumber = display.value.split(/[+\-*/]/).pop(); // Ambil angka terakhir
//                 if (!lastNumber.includes('.')) {
//                     display.value += '.';
//                 }
//             }
//         } else if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
//                 const result = eval(display.value.replace(/,/g, '.'));
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             // Jika operator ditambahkan, izinkan pengguna untuk menggunakan tanda titik lagi
//             if (['+', '-', '*', '/'].includes(value)) {
//                 display.value += value;
//             } else if (!isNaN(parseInt(value))) {
//                 // Jika angka ditambahkan, periksa apakah karakter terakhir adalah operator
//                 if (['+', '-', '*', '/'].includes(lastChar)) {
//                     display.value += value;
//                 } else {
//                     // Periksa apakah karakter terakhir adalah angka dengan desimal
//                     if (lastChar.includes('.')) {
//                         // Jika angka sebelumnya sudah memiliki desimal, tambahkan angka setelah titik
//                         display.value += value;
//                     } else {
//                         display.value += value;
//                     }
//                 }
//             }
//         }
//     });
// });

// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === ',') {
//             // Periksa apakah karakter terakhir adalah angka
//             if (!isNaN(parseInt(lastChar))) {
//                 // Periksa apakah ada tanda titik di dalam angka terakhir
//                 const lastNumber = display.value.split(/[+\-*/%]/).pop(); // Ambil angka terakhir
//                 if (!lastNumber.includes('.')) {
//                     display.value += '.';
//                 }
//             }
//         } else if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
//                 const result = eval(display.value.replace(/,/g, '.').replace(/%/g, '/100*'));
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             // Jika operator ditambahkan, izinkan pengguna untuk menggunakan tanda titik lagi
//             if (['+', '-', '*', '/', '%'].includes(value)) {
//                 display.value += value;
//             } else if (!isNaN(parseInt(value))) {
//                 // Jika angka ditambahkan, periksa apakah karakter terakhir adalah operator
//                 if (['+', '-', '*', '/', '%'].includes(lastChar)) {
//                     display.value += value;
//                 } else {
//                     // Periksa apakah karakter terakhir adalah angka dengan desimal
//                     if (lastChar.includes('.')) {
//                         // Jika angka sebelumnya sudah memiliki desimal, tambahkan angka setelah titik
//                         display.value += value;
//                     } else {
//                         display.value += value;
//                     }
//                 }
//             }
//         }
//     });
// });

// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === ',') {
//             // Periksa apakah karakter terakhir adalah angka
//             if (!isNaN(parseInt(lastChar))) {
//                 // Periksa apakah ada tanda titik di dalam angka terakhir
//                 const lastNumber = display.value.split(/[+\-*/%]/).pop(); // Ambil angka terakhir
//                 if (!lastNumber.includes('.')) {
//                     display.value += '.';
//                 }
//             }
//         } else if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
//                 const result = eval(display.value.replace(/,/g, '.'));
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             // Jika operator ditambahkan, izinkan pengguna untuk menggunakan tanda titik lagi
//             if (['+', '-', '*', '/', '%'].includes(value)) {
//                 // Periksa apakah karakter terakhir adalah operator persen
//                 if (lastChar === '%') {
//                     // Tambahkan operator matematika yang sesuai untuk persen
//                     display.value = display.value.slice(0, -1) + '/100*';
//                 } else {
//                     display.value += value;
//                 }
//             } else if (!isNaN(parseInt(value))) {
//                 // Jika angka ditambahkan, periksa apakah karakter terakhir adalah operator
//                 if (['+', '-', '*', '/', '%'].includes(lastChar)) {
//                     display.value += value;
//                 } else {
//                     // Periksa apakah karakter terakhir adalah angka dengan desimal
//                     if (lastChar.includes('.')) {
//                         // Jika angka sebelumnya sudah memiliki desimal, tambahkan angka setelah titik
//                         display.value += value;
//                     } else {
//                         display.value += value;
//                     }
//                 }
//             }
//         }
//     });
// });


// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === ',') {
//             // Periksa apakah karakter terakhir adalah angka
//             if (!isNaN(parseInt(lastChar))) {
//                 // Periksa apakah ada tanda titik di dalam angka terakhir
//                 const lastNumber = display.value.split(/[+\-*/%]/).pop(); // Ambil angka terakhir
//                 if (!lastNumber.includes('.')) {
//                     display.value += '.';
//                 }
//             }
//         } else if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
//                 const result = eval(display.value.replace(/,/g, '.').replace(/%/g, '/100*'));
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if (value === '%') {
//             // Periksa apakah karakter terakhir adalah angka
//             if (!isNaN(parseInt(lastChar))) {
//                 // Jika ya, tambahkan operator persen
//                 display.value += value;
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             // Jika operator ditambahkan, izinkan pengguna untuk menggunakan tanda titik lagi
//             if (['+', '-', '*', '/'].includes(value)) {
//                 display.value += value;
//             } else if (!isNaN(parseInt(value))) {
//                 // Jika angka ditambahkan, periksa apakah karakter terakhir adalah operator
//                 if (['+', '-', '*', '/'].includes(lastChar)) {
//                     display.value += value;
//                 } else {
//                     // Periksa apakah karakter terakhir adalah angka dengan desimal
//                     if (lastChar.includes('.')) {
//                         // Jika angka sebelumnya sudah memiliki desimal, tambahkan angka setelah titik
//                         display.value += value;
//                     } else {
//                         display.value += value;
//                     }
//                 }
//             }
//         }
//     });
// // });
// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === ',') {
//             // Periksa apakah karakter terakhir adalah angka
//             if (!isNaN(parseInt(lastChar))) {
//                 // Periksa apakah ada tanda titik di dalam angka terakhir
//                 const lastNumber = display.value.split(/[+\-*/%]/).pop(); // Ambil angka terakhir
//                 if (!lastNumber.includes('.')) {
//                     display.value += '.';
//                 }
//             }
//         } else if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
//                 const result = eval(display.value.replace(/,/g, '.').replace(/%/g, '/100*'));
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if (value === '%') {
//             // Periksa apakah karakter terakhir adalah angka
//             if (!isNaN(parseInt(lastChar))) {
//                 // Jika ya, tambahkan operator persen
//                 display.value += value;
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             // Jika operator ditambahkan, izinkan pengguna untuk menggunakan tanda titik lagi
//             if (['+', '-', '*', '/'].includes(value)) {
//                 display.value += value;
//             } else if (!isNaN(parseInt(value))) {
//                 // Jika angka ditambahkan, periksa apakah karakter terakhir adalah operator
//                 if (['+', '-', '*', '/'].includes(lastChar)) {
//                     display.value += value;
//                 } else {
//                     // Periksa apakah karakter terakhir adalah angka dengan desimal
//                     if (lastChar.includes('.')) {
//                         // Jika angka sebelumnya sudah memiliki desimal, tambahkan angka setelah titik
//                         display.value += value;
//                     } else {
//                         display.value += value;
//                     }
//                 }
//             }
//         }
//     });
// });

// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === ',') {
//             // Periksa apakah karakter terakhir adalah angka
//             if (!isNaN(parseInt(lastChar))) {
//                 // Periksa apakah ada tanda titik di dalam angka terakhir
//                 const lastNumber = display.value.split(/[+\-*/%]/).pop(); // Ambil angka terakhir
//                 if (!lastNumber.includes('.')) {
//                     display.value += '.';
//                 }
//             }
//         } else if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
//                 const result = eval(display.value.replace(/,/g, '.').replace(/%/g, '/100*'));
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if (value === '%') {
//             // Periksa apakah karakter terakhir adalah angka
//             if (!isNaN(parseInt(lastChar))) {
//                 // Jika ya, tambahkan operator persen
//                 display.value += value;
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             // Jika operator ditambahkan, izinkan pengguna untuk menggunakan tanda titik lagi
//             if (['+', '-', '*', '/'].includes(value)) {
//                 display.value += value;
//             } else if (!isNaN(parseInt(value))) {
//                 // Jika angka ditambahkan, periksa apakah karakter terakhir adalah operator
//                 if (['+', '-', '*', '/'].includes(lastChar)) {
//                     display.value += value;
//                 } else {
//                     // Periksa apakah karakter terakhir adalah angka dengan desimal
//                     if (lastChar.includes('.')) {
//                         // Jika angka sebelumnya sudah memiliki desimal, tambahkan angka setelah titik
//                         display.value += value;
//                     } else {
//                         display.value += value;
//                     }
//                 }
//             }
//         }
//     });
// });


// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === ',') {
//             // Periksa apakah karakter terakhir adalah angka
//             if (!isNaN(parseInt(lastChar))) {
//                 // Periksa apakah ada tanda titik di dalam angka terakhir
//                 const lastNumber = display.value.split(/[+\-*/%]/).pop(); // Ambil angka terakhir
//                 if (!lastNumber.includes('.')) {
//                     display.value += '.';
//                 }
//             }
//         } else if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
//                 const result = eval(display.value.replace(/,/g, '.').replace(/%/g, '/100*'));
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if (value === '%') {
//             // Periksa apakah karakter terakhir adalah angka
//             if (!isNaN(parseInt(lastChar))) {
//                 // Jika ya, tambahkan operator persen
//                 display.value += value;
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             // Jika operator ditambahkan, izinkan pengguna untuk menggunakan tanda titik lagi
//             if (['+', '-', '*', '/', '%'].includes(value)) {
//                 display.value += value;
//             } else if (!isNaN(parseInt(value))) {
//                 // Jika angka ditambahkan, periksa apakah karakter terakhir adalah operator
//                 if (['+', '-', '*', '/', '%'].includes(lastChar)) {
//                     display.value += value;
//                 } else {
//                     // Periksa apakah karakter terakhir adalah angka dengan desimal
//                     if (lastChar.includes('.')) {
//                         // Jika angka sebelumnya sudah memiliki desimal, tambahkan angka setelah titik
//                         display.value += value;
//                     } else {
//                         display.value += value;
//                     }
//                 }
//             }
//         }
//     });
// });

// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         const display = document.querySelector('.display');
//         const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

//         if (value === ',') {
//             // Periksa apakah karakter terakhir adalah angka
//             if (!isNaN(parseInt(lastChar))) {
//                 // Periksa apakah ada tanda titik di dalam angka terakhir
//                 const lastNumber = display.value.split(/[+\-*/%]/).pop(); // Ambil angka terakhir
//                 if (!lastNumber.includes('.')) {
//                     display.value += '.';
//                 }
//             }
//         } else if (value === 'AC') {
//             display.value = '';
//         } else if (value === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//             try {
//                 // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
//                 const result = eval(display.value.replace(/,/g, '.').replace(/%/g, '/100*'));
//                 display.value = result;
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if (value === '%') {
//             // Periksa apakah karakter terakhir adalah angka
//             if (!isNaN(parseInt(lastChar))) {
//                 // Jika ya, tambahkan operator persen
//                 display.value += value;
//             }
//         } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
//             display.value = display.value.slice(0, -1) + value;
//         } else {
//             // Jika operator ditambahkan, izinkan pengguna untuk menggunakan tanda titik lagi
//             if (['+', '-', '*', '/', '%'].includes(value)) {
//                 display.value += value;
//             } else if (!isNaN(parseInt(value))) {
//                 // Jika angka ditambahkan, periksa apakah karakter terakhir adalah operator
//                 if (['+', '-', '*', '/', '%'].includes(lastChar)) {
//                     display.value += value;
//                 } else {
//                     // Periksa apakah karakter terakhir adalah angka dengan desimal
//                     if (lastChar.includes('.')) {
//                         // Jika angka sebelumnya sudah memiliki desimal, tambahkan angka setelah titik
//                         display.value += value;
//                     } else {
//                         display.value += value;
//                     }
//                 }
//             }
//         }
//     });
// });

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        const display = document.querySelector('.display');
        const lastChar = display.value.slice(-1); // Ambil karakter terakhir dari input

        if (value === ',') {
            // Periksa apakah karakter terakhir adalah angka
            if (!isNaN(parseInt(lastChar))) {
                // Periksa apakah ada tanda titik di dalam angka terakhir
                const lastNumber = display.value.split(/[+\-*/%]/).pop(); // Ambil angka terakhir
                if (!lastNumber.includes('.')) {
                    display.value += '.';
                }
            }
        } else if (value === 'AC') {
            display.value = '';
        } else if (value === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            try {
                // Ganti tanda koma (",") dengan tanda titik (".") sebelum evaluasi
                const result = eval(display.value.replace(/,/g, '.').replace(/%/g, '/100*'));
                display.value = result;
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === '%') {
            // Periksa apakah karakter terakhir adalah angka
            if (!isNaN(parseInt(lastChar))) {
                // Jika ya, tambahkan operator persen
                display.value += value;
            } else if (lastChar === '%' && display.value.length > 1) {
                // Periksa jika karakter terakhir adalah '%' dan panjang input lebih dari 1
                // Hal ini memungkinkan operator '%' untuk diikuti oleh operator matematika lainnya
                display.value += value;
            }
        } else if ((isNaN(parseInt(lastChar)) && isNaN(parseInt(value))) || (lastChar === '%' && value === '%')) {
            display.value = display.value.slice(0, -1) + value;
        } else {
            // Jika operator ditambahkan, izinkan pengguna untuk menggunakan tanda titik lagi
            if (['+', '-', '*', '/', '%'].includes(value)) {
                display.value += value;
            } else if (!isNaN(parseInt(value))) {
                // Jika angka ditambahkan, periksa apakah karakter terakhir adalah operator
                if (['+', '-', '*', '/', '%'].includes(lastChar)) {
                    display.value += value;
                } else {
                    // Periksa apakah karakter terakhir adalah angka dengan desimal
                    if (lastChar.includes('.')) {
                        // Jika angka sebelumnya sudah memiliki desimal, tambahkan angka setelah titik
                        display.value += value;
                    } else {
                        display.value += value;
                    }
                }
            }
        }
    });
});



function halo(a,b,c){
    console.log(arguments)
   
}
halo('dodol','durians','daki')