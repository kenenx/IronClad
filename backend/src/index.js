import Config from './config/Config.js';
import Database from './db/Database.js';
import AuthRoutes from './routes/Auth.routes.js';
import Server from './server/Server.js';

Config.load();
const { PORT, HOST, DB_URI } = process.env;

const authRouter = new AuthRoutes();

const server = new Server(PORT, HOST, authRouter);
const database = new Database(DB_URI);

server.start();
database.connect();