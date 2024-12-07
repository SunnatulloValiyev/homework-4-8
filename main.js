// 1-misol

// Yangi obyekt yarating. Unga "name", "age" va "location" kabi xususiyatlarni qo'shing. Keyin, obyektning qiymatlarini konsolda ko'rsating.

// const info = {
//     name: "Sunnatullo",
//     age: 18,
//     location: "Qoqon",
// }
// console.log(info);


// 2-misol

//  Obyekt ichida boshqa obyekt yarating. Masalan, "address" obyektini asosiy obyektda joylashtiring, unda "city" va "zipCode" kabi xususiyatlar bo'lsin.

// const address = {
//     country: "Uzbekistan",
//     info: {
//         city: "Qoqon",
//         zipCode: "Java Script",
//     }
// }
// console.log(address);

// 3-misol

// Biror obyektda mavjud bo'lgan xususiyatni o'zgartirish, yangi xususiyat qo'shish va xususiyatni o'chirish vazifasini bajaring.

// const infos = {
//     name: "Sunnatullo",
//     age: 18,
//     country: "Uzbekistan",
// }
// infos.name = "Tillo";
// infos.city = "Qoqon";
// delete infos.age
// console.log(infos);


// 4-misol

// const user = {
//     name: "Abdummannon",
//     age: 15,
//     address: {
//         city: "Qoqon",
//         street: "sayilgoh",
//         zipCode: 12345,
//     },
//     contact: {
//         email: "MannonPuaro987@gmail.com",
//         phone: {
//             home: "",
//             work: ""
//         }
//     }
// };

// user.contact.phone.home = prompt("Uy manzilingizni kiriting");
// user.contact.phone.work = prompt("Ishingizni kiriting");

// console.log(user);


// =================================

// .?  optional chainning nima uchun kerakligi haqida 3 ta sabab


// 1-sabab
// Xatoliklarni oldini olish: undefined yoki null bo'lgan obyektdan xususiyatga murojaat qilishda xatoliklarni oldini oladi. 
// Misol uchun, agar obyekt mavjud bo'lmasa, xatolik yuzaga kelmasdan undefined qaytaradi.

// 2-sabab
//  Har bir darajadagi obyektdan xususiyatga murojaat qilishdan oldin tekshiruvlar
//   (masalan,if)yozish o'rniga optional chaining yordamida kodni qisqartirish mumkin.

// 3-sabab
// Katta dasturlarda chuqur ichki strukturalarga ega bo'lgan malumotlar bilan
// ishlashda optimal chaining bazi narsalar yo'q bolsa ham to'g'ri ishlashda imkon beradi