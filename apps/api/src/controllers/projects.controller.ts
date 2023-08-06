import { Request, Response } from "express";
import Router from "express-promise-router";
import { projects } from "../data/data.projects";

class Index {
    public path = "/projects";
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.projects);
    }

    public projects = async (req: Request, res: Response) => {
        switch (req.method) {
            case "GET":
                try {
                    const data = { data: projects };
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
