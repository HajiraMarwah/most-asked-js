
//using parseInt
const string="123"
const num=parseInt(string)
console.log(num)
console.log(typeof num)
console.log(parseInt("123abc")); // 123
console.log(parseInt("abc123")); // NaN (invalid start)


//Using Number
const num1 = Number("123");
console.log(num1); // 123

//difference
parseInt("12px"); // 12
Number("12px");   // NaN

