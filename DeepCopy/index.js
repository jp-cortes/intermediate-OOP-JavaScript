// object to copy
const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    editA() {
        this.a = 'Abcd'
    }
};

//this two functions will validate the data


function isObject(subject) {
    return typeof subject == "object";
}
 function isArray(subject) {
    return Array.isArray(subject);
 }


//recursive function that will copy an object even tho there is another object inside this one
 function deepCopy(subject) {
    let copySubject;

    //this function will generate the  deep copy
    //copySubjet will save al the data

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
    // this two const will call the functions that validate data if is object or array


    //this will work wilh the validated data
    if(subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    }else {
        return subject;
    }

    // create a loop 
    for (key in subject) {
        //withh this i will validate if the data inside  are object
        const keyIsObject = isObject(subject[key]);
        if (keyIsObject) {
            //if data inside are object  we will copy info inside copySubject
            copySubject[key] = deepCopy(subject[key]);
        } else {

            if (subjectIsArray) {
                copySubject.push(subject[key])
            } else {
                copySubject[key] = subject[key];
            }
            //this two situations a are for dta that are not array or  objects
        }
    }
    //at the end the functio will rwrutn the info stored in copy subject
    return copySubject;
 }

 const studentBase = {
    name:undefined,
    email:undefined,
    age:undefined,
    approvedCourses:undefined,
    learningPaths:undefined,
    socialMedia:{
        twitter:undefined,
        instagram:undefined,
        facebook:undefined,
    },};

    juan = deepCopy(studentBase);
    Object.seal(juan);
   
    Object.isSealed();// to verify if an object is  Object.seal();
    
    Object.isFrozen();// to verify if an object is Object.freeze();