import { Request, Response } from "express";
import Router from "express-promise-router";

class Index {
    public path = "/";
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.helloWorld);
    }

    public helloWorld = async (req: Request, res: Response) => {
        switch (req.method) {
            case "GET":
                try {
                    const data = { data: "Hello World!" };
                    res.status(200).json(data);
                } catch {
                    res.status(500).json({ error: "Something went wrong" });
                }
                break;
            default:
                res.status(400).send({
                    error: `${req.method} Method Not Allowed`,
                });
        }
    };
}

export default Index;
