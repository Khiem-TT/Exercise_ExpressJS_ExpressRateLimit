import express from "express";
import apiRouter from "./src/routers/api.router";

const port = 8000;
const app = express();

app.use('/api', apiRouter);

app.listen(port);