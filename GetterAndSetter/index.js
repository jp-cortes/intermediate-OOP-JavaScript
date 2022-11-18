function isRequired(parameter) {
    throw new Error(parameter + "is mandatory");
 }
 function isArray(subject) {
    return Array.isArray(subject);
 }
function CreateLearningPath({
    name = isRequired("name"),
    courses = [],
}) {
   this.name = name;
   this.course = courses;
}
//  getters and setter of a pattern factory
function User({
    name = isRequired("name"),
    email = isRequired("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
 } = {}) {

  
        this.name = name;
        this.email = email;
        this.age = age;
        this.approvedCourses = approvedCourses;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        const private = {
            //create an object private and asin to the index the value of an empty array
            "_learningPaths": [],
        };
        //define the proprties of "this" makes reference "the object prototype itself"
        
    //syntax
//    Object.defineProperty(obj,prop,descriptor);
        Object.defineProperty(this, "learningPaths", {
        //    accesing to the method get and set of __proto__
            get() {
                return private["_learningPaths"];//"_learningPaths": [],
            },
            set(newLearningPath) {
                if(newLearningPath instanceof CreateLearningPath) {
                    private["_learningPaths"].push(newLearningPath);
                } else {
                    console.warn("Access denied")
                }

            },
        });
        
            
            for(index of learningPaths) {
                this.learningPaths = index;
            }
        
        
        
    
 }

 const blockchainSchool = new CreateLearningPath({name:"Bitcoin history"});
 const frontendSchool = new CreateLearningPath({name:"Desing for developers"});

const juan = new User({
    name:"Kuan",
    email:"fatalfury@kof.com",
    learningPaths: [
        blockchainSchool,
        frontendSchool,
        // {
        //     name:"fake course",
        //     courses:["hfdshfdskh","hhfdhfkhf"]
        // }
    ],
});

