
 // tis function is for a mandatory "parameter"
 function isRequired(parameter) {
    throw new Error(parameter + "is mandatory");
 }
//receive an object return an object RORO pattern
 function createUser({
    name = isRequired("name"),
    email = isRequired("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
 } = {}) {
    const private = {"_name": name,};
    const public = {
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },

        //getters & setters are methods of access
        //means are public interfaces to change parts of the private classess
        get name() {
            return private["_name"];
        },
        set name(newName) {
            if(newName.length != 0) {
                private["_name"] = newName;
            } else {
                console.warn('your name must have at leats 1 charater')
            }
        },
        // readName() {
        //     return private["_name"];
        // },
        // changeName(newName) {
        //     private["_name"] = newName;
        // },
    };
    // //this will prevent somebody to modify the method
    // Object.defineProperty(public, "readName", {
    //     writable: false,
    //     configurable: false,
    // });
    // //this will prevent somebody to modify the method
    // Object.defineProperty(public, "changeName", {
    //     writable: false,
    //     configurable: false,
    // });
    return public
        
        
    
 }

 const juan = createUser({name:"Kuan",email:"fatalfury@kof.com"})