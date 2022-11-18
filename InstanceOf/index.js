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
  
        this._name = name;
        this._email = email;
        this.age = age;
        this.approvedCourses = approvedCourses;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        if (isArray(learningPaths)) {
            this.learningPaths = [];
            for(index of learningPaths) {
                if(index instanceof CreateLearningPath) {
                    this.learningPaths.push(index)
                }
            }
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
        {
            name:"fake course",
            courses:["hfdshfdskh","hhfdhfkhf"]
        },
    ],
});