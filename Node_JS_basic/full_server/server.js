// full_server/server.js
import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

app.use('/', routes);

// Exporting express app for testing
if (require.main === module) {
    const filePath = process.argv[2];
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log(`Database file path: ${filePath}`);
    });
}

export default app;
module.exports = app;
