// third-party libraries
import dotenv from "dotenv";
dotenv.config();

// modules
import app from './src/app';

// server variables
const port = process.env.PORT || 7070;
const hostName = process.env.HOSTNAME;

// redisClient.get();

// start app
app.listen(port, () => {
  console.log(`App running on ${hostName}:${port}`);
});

process.on('SIGINT', () => {
  console.log('Server shutting down');
  console.log('Server shut down success');
  process.exit(0);
});