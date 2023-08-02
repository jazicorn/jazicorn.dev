"use strict";
/* eslint-disable  @typescript-eslint/no-explicit-any */
import App from "./config/server";
import Index from "./controllers/index.controller";

const app = new App([new Index()]);

app.listen();

export default app;
