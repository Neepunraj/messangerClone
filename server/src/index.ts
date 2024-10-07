import { config } from "dotenv";
import fastify from "fastify";
config();
const app = fastify();

app.listen({port:parseInt(process.env.PORT!)})