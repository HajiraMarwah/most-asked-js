const num = 123;
const str = String(num);

console.log(str);        // "123"
console.log(typeof str); // "string"
// 123.toString();   // ❌ SyntaxError
(123).toString(); // ✅ "123"
