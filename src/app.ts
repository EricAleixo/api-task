import express from "express";
import { router } from "./routers/router";
import "dotenv/config";

const PORT = Number(process.env.PORT) || 3000
const HOST = "0.0.0.0";

const app = express();
app.use(express.json());

app.use(router);

app.listen(PORT, HOST, () => console.log(`API no ar: http://localhost:${PORT}`))