let myDetails = {
    firstName: "vidhi",
    lastName: "Tomar",
  hasLicense: true,
    PhoneNumber: 7011402547,
    age: 2022 - 1999,
    friends: ["megha", "bhaskar", "tannu", "Ashu"],

    getSummary: function(){
        return `${this.firstName} is ${this.age} old and ${this.hasLicense ? 'have a drive licence' : 'dont have driver license '}`
    }
  };

 console.log(myDetails.getSummary())

