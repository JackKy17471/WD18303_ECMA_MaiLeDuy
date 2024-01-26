// Định nghĩa một đối tượng "person"
let person = {
    name: "John",
    age: 30,
    sayHello: function () {
        console.log("Hello, my name is " + this.name);
    }
};

// Gọi phương thức sayHello của đối tượng person
person.sayHello();

// Gọi phương thức sayHello mà không thông qua đối tượng person
var helloFunction = person.sayHello;
helloFunction();


