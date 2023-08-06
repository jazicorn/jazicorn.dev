"use strict";
/* eslint-disable  @typescript-eslint/no-explicit-any */
import App from "./config/server";
import Index from "./controllers/index.controller";
import Projects from "./controllers/projects.controller";

const app = new App([new Index(), new Projects()]);

app.listen();

export default app;
