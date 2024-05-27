const fs = require("fs");
function countStudents(path) {
    const data = fs.readFileSync(path, "UTF-8");
    if (data.length === 0) {
        throw new Error("Cannot load the database")
    }
    const lines = data.trim().split("\n");

    let countCs = 0
    let countSwe = 0
    let csNames = []
    let sweNames = []

    lines.forEach(line => {
        const fields = line.split(",")

        if (fields.length === 4 && fields[0] !== "", fields[1] !== "", fields[2] !== "", fields[3] !== "") {
            if (fields[3].trim() === "CS") {
                countCs += 1;
                csNames.push(fields[0])
            }
            else if (fields[3].trim() === "SWE") {
                countSwe += 1;
                sweNames.push(fields[0])
            }
        }
    })

    console.log(`Number of students: ${lines.length - 1}`)
    console.log(`Number of students in CS: ${countCs}. List: ${csNames.join(", ")}`)
    console.log(`Number of students in SWE: ${countSwe}. List: ${sweNames.join(", ")}`)
}
module.exports = countStudents;
