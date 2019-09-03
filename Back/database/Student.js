//Student structure
let Student = class {
    constructor(f_name, l_name, email, sector, birthdate, address, grades, absence, password, tag){
        this.f_name = f_name 
        this.email = email
        this.sector = sector
        this.l_name = l_name
        this.birthdate = birthdate
        this.address = address
        this.grades = grades
        this.absence = absence
        this.password = password
        this.tag = tag
    }
}

module.exports = Student