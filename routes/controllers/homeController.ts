import { Request, Response } from "express";
import { IUserModel } from "../../database/models/user";

export class HomeController {
    constructor() {
    }

    index(expressReq: Request, expressRes: Response): void {
        expressRes.json("HELLO, I'm HomeController");
    }

    getCurrentUser(expressReq: Request, expressRes: Response): void {
        var user: IUserModel = <IUserModel>{ name: "Steve", age: 30, address: "address" };
        expressRes.json({ name: user.name, age: user.age });
    }
}