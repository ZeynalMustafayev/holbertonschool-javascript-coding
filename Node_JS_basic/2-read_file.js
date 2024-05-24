function countStudents() {
    const fs = require("fs");
    const data = fs.ReadStream("database.csv", "UTF-8");
    if (!(data)) {
        throw new Error("Cannot load the database")
    }
    console.log(`Number of students: ${data.length}`)
    console.log(`Number of students in ${data.field}: 6. List: ${data.firstname}`)
}
module.exports = countStudents;
