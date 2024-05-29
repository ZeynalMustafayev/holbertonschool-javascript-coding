// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils';

export default class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const fields = await readDatabase(req.filePath);
            let response = 'This is the list of our students\n';
            Object.keys(fields).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).forEach(field => {
                response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
            });
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
            return res.status(500).send('Major parameter must be CS or SWE');
        }

        try {
            const fields = await readDatabase(req.filePath);
            const students = fields[major] || [];
            const response = `List: ${students.join(', ')}`;
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}
module.exports = StudentsController;