class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName
        this.lastName = lastName
        this.year = year
        this.score = []
    }
    // instant methods
     fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
     }

     addScore(score){
        this.score.push(score)
        return this.score
     }

     // class methods
     // used in utility functions
     static enrollStudents(...students){
        // not related to instances like Student1 and Student2
        // they are called by Class name only
        return `Enrollment`
     }
}

// to create instantite 
let Student1 = new Student("Sumeet","Golasangi",2023,20)
let Student2 = new Student("Akash","Golasangi",2023,20)

Student.enrollStudents([Student1,Student2])

