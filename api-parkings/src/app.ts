// third-party libraries
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from 'cookie-parser';

// routes
import mainRouter from './api';

const { urlencoded, json } = express;

// Create global app Objects
const app: Application = express();

// Normal express config defaults
app.use(cors({ credentials: true }));
app.use(helmet());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cookieParser());

// base routes
app.use('/api/v1', mainRouter)
app.use('/', (req: Request, res: Response) => {
  return res.status(200).json({
    message: `Server is running on port: ${process.env.PORT}`,
  });
});
app.use((req: Request, res: Response, next: NextFunction) => {
  const err: any = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err: any, req: Request, res: Response) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

export default app;
