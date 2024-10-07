import cors from "@fastify/cors";
import { config } from "dotenv";
import fastify from "fastify";
import { userRoutes } from "./routes/user.js";
config();
const app = fastify();

app.register(cors,{origin:process.env.CLIENT_URL})
app.register(userRoutes)

app.listen({port:parseInt(process.env.PORT!)})