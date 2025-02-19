//Caveat of Prototype Pattern
let original = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
  },
};
let shallowCopy = { ...original };
shallowCopy.address.city = "San Francisco";
console.log("Shallow copy: ", shallowCopy.address.city); //Chicago
console.log("Original copy: ", original.address.city); //Chicago

let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "Los Angeles";
console.log("Deep copy: ", deepCopy.address.city); //Chicago
console.log("Original copy: ", original.address.city); //Chicago
