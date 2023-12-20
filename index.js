import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// init the configuration environment
dotenv.config();

const app = express();
app.use(bodyParser.json())
import openaiRoutes from './routes/openaiRoutes.js';
export const completionUrl = process.env.COMPLETION_URL || 'https://api.openai.com/v1/engines/davinci/completions';
export const model = process.env.MODEL || 'gpt-3.5-turbo';
export const secret = process.env.OPEN_API_KEY;

// Use routes
app.use('/api', openaiRoutes);

// Set up the Express app to listen on a specific port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
