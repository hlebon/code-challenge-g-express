import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import pinoLogger from 'pino-http';

import { connectDB } from './src/config/database.js';
import assetRouter from './src/routes/assetsRouter.js';
import kpiRouter from './src/routes/kpiRouter.js';
import layoutRouter from './src/routes/layoutRouter.js';
import storyboardRouter from './src/routes/storyboardRouter.js';
import dataVizRouter from './src/routes/dataVizRouter.js';
import libraryRouter from './src/routes/LibraryItemRouter.js';
import { errorHanlder } from './src/middleware/errorHandler.js';

const PORT = process.env.PORT || 3001;
const DB_URI = process.env.DB_URI;

const app = express();

app.use(cors());
app.use(
  pinoLogger({
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB(DB_URI);

app.use('/api/assets', assetRouter);
app.use('/api/kpis', kpiRouter);
app.use('/api/layouts', layoutRouter);
app.use('/api/storyboards', storyboardRouter);
app.use('/api/dataviz', dataVizRouter);
app.use('/api/library', libraryRouter);

app.use(errorHanlder);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
