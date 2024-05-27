const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }

    let countCs = 0;
    let countSwe = 0;
    const csNames = [];
    const sweNames = [];

    lines.forEach((line, index) => {
      if (index === 0) return;
      const fields = line.split(',');

      if (fields.length === 4 && fields[0] !== '' && fields[1] !== '' && fields[2] !== '' && fields[3] !== '') {
        if (fields[3].trim() === 'CS') {
          countCs += 1;
          csNames.push(fields[0].trim());
        } else if (fields[3].trim() === 'SWE') {
          countSwe += 1;
          sweNames.push(fields[0].trim());
        }
      }
    });

    console.log(`Number of students: ${lines.length - 1}`);
    console.log(`Number of students in CS: ${countCs}. List: ${csNames.join(', ')}`);
    console.log(`Number of students in SWE: ${countSwe}. List: ${sweNames.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
