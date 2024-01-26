
let person = {
    firstname: "Albert",
    lastname: "Einstein",

    setLastname: function (_lastname) {
        this.lastname = _lastname;
    },

    setFirstname: function (_firstname) {
        this.firstname = _firstname;
    },

    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
}

person.setLastname('Newton');
person.setFirstname('Isaac');
console.log(person.getFullName()); 