const jhonny = {
    name: "Jhon",
    age: 32,
    approvedCourses: ["Course 1"],
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

//  static methods of Object
//  console.log(Object.keys(jhonny));

//  console.log(Object.entries(jhonny));

//  console.log(Object.getOwnPropertyNames(jhonny));


    //syntax
//    Object.defineProperty(obj,prop,descriptor);
 
 Object.defineProperty(jhonny, "navigator", {
    value: "EDGE",
    enumerable: false,
    //prevent the poperty to a show in Objet.keys how ever with getOwnPropertyNames
    writable: true,
    // this  will allow to edit the value
    configurable: true,
    //this will allow to delete it
 });
 Object.defineProperty(jhonny, "IDE", {
    value: "VsCode",
    enumerable: true,
    writable: true,
    configurable: true,
 });

// Object.seal(jhonny); 
//prevent the properties to be configurable
Object.freeze(jhonny);
//prevent the properties to be configurable and writable


 console.log(Object.getOwnPropertyDescriptors(jhonny));
