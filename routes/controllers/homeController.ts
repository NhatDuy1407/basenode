import { Request, Response } from "express";
import { UserModel } from "../../database/models/user";
import { injectable, inject } from "inversify";
import { IUserService } from "../../services/userService";
import { SERVICE_IDENTIFIER } from "../../constants/identifiers";
import logger from '../../utils/logger'

@injectable()
export class HomeController {
    private _userService: IUserService;
    private _userService2: IUserService;
    constructor(@inject(SERVICE_IDENTIFIER.UserService) userService: IUserService,
        @inject(SERVICE_IDENTIFIER.UserService) userService2: IUserService) {
        this._userService = userService;
        this._userService2 = userService2;
    }

    index(expressReq: Request, expressRes: Response): void {
        logger.info("Hello, it's me");
        expressRes.json("HELLO, I'm HomeController: " + this._userService.findUser("test") + "-----" + this._userService2.findUser("test"));
    }

    getCurrentUser(expressReq: Request, expressRes: Response): void {
        var user: UserModel = <UserModel>{ name: "Steve", age: 30, address: "address" };
        expressRes.json({ name: user.name, age: user.age });
    }
}