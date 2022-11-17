
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
    return {
        name,
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
    };
 }

 const juan = createUser({name:"Kuan",email:"fatalfury@kof.com"})