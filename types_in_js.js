// 1 = primitive 
// 2 = Reference

// primitive = number,  string , null , undefined , boolean

// reference  = [], (), {}

// // aise koi bhi value jisko copy karne par uski copy ni hoti balk us main value ka refernece pass hojata hai use hum reference value kehte hai
//  aur jiska reak copy karne par real copy ho aje use primitive values kehte hai


var a = [1,2,3,4,5];
var b = a; 
b.pop();

