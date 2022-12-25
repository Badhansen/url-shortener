import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

const app = express();
connectDB();

import indexRouter from "./routes/index.js";
import allRouter from "./routes/all.js";
import urlsRouter from "./routes/urls.js";


// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api/', allRouter);
app.use('/api/', urlsRouter);

// Server setup
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});