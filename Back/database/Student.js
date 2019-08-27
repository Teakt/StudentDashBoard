//Student structure
let Student = class {
    constructor(f_name, l_name, email, sector, birthdate, address, grades, absence, password){
        this.f_name = f_name 
        this.email = email
        this.sector = sector
        this.l_name = l_name
        this.birthdate = birthdate
        this.address = address
        this.grades = grades
        this.absence = absence
        this.password = password
    }
}

module.exports = Student