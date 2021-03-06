// original source:
// https://codedestine.com/javascript-deep-shallow-cloning/#:~:text=JavaScript%20Deep%20and%20Shallow%20Clone%20of%20Object.%20In,types%2C%20a%20primitive%20type%2C%20and%20an%20object%20type.

const original = {
    name: 'Robert',
    location: 'USA',
    family: {
        father: 'Rob',
        mother: 'Eve'
    }
};

const clone = { ...original };

console.log("original and clone after assign:");
console.log("original =",original);
console.log("clone =", clone);

original.name = 'John';
original.family.father = 'Josh';

console.log("\noriginal and clone after changes to original:");
console.log("original =",original);
console.log("clone =", clone);
