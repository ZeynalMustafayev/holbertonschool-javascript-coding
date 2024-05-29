// full_server/server.js
import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

app.use('/', (req, res, next) => {
    req.filePath = process.argv[2]; // Passing file path to request object
    next();
});

app.use('/', routes);

export default app;

// Exporting express app for testing
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
