import express from 'express';
import userRoutes from "./routes/user.routes.js";
import { requestLogger } from './middlewares/logger.middleware.js';

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.use(requestLogger);

export default app;
