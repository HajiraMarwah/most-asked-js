const user = {
  name: "Hajira",
  address: { city: "Bangalore", pin: 560001 }
};
const obj={...user,...user.address}
console.log("before object",obj)
delete obj.address
console.log("after object",obj)