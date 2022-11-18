//is a type system where the type or the class of an object is less important than the method it defines
//Using duck typing the the presence of a given method or attribute

function isRequired(parameter) {
    throw new Error(parameter + "is mandatory");
 }
 function isArray(subject) {
    return Array.isArray(subject);
 }
function createLearningPath({
    name = isRequired("name"),
    courses = [],
}) {
    const private = {
        "_name": name,
        "_courses": courses,
    }

    const public = {
        get name() {
            return private["_name"];
        },
        set name(newName) {
            if(newName.length != 0) {
                private["_name"] = newName;
            } else {
                console.warn("Your name must have at leats 1 character")
            }
        },
        get courses() {
            return private["_courses"];
        }
    }
    return public;
}
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
    const private = {
        "_name": name,
        "_learningPaths": learningPaths,
    };
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
        get learningPaths(){
            return private["_learningPaths"];
        },
        set learningPaths(newLearningPath) {
            if(!newLearningPath.name) {
                //conditional for create a learning path
                console.warn("Your learning path doesn't have a name")
                return;
            }
            if(!newLearningPath.courses) {
                //conditional for create a learning path
                console.warn("Your learning path doesn't have a courses")
                return;
            }
            if(!isArray(newLearningPath.courses)) {
                //conditional for create a learning path
                //however can be an empty array
                console.warn("Your learning path is not a list of courses")
                return;
            }
            private["_learningPaths"].push(newLearningPath)
        },
    };
    return public
        
        
    
 }

 const juan = createUser({name:"Kuan",email:"fatalfury@kof.com"})