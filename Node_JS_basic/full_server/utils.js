// full_server/utils.js
import fs from 'fs';

export function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const lines = data.split('\n').map(line => line.split(','));
                const fields = {};
                lines.forEach(line => {
                    const [firstName, field] = line;
                    if (!fields[field]) {
                        fields[field] = [];
                    }
                    fields[field].push(firstName);
                });
                resolve(fields);
            }
        });
    });
}

module.exports = readDatabase;