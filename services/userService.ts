import { Guid } from "guid-typescript";
import { injectable } from "inversify";

// a interface of user service
export interface IUserService {
    findUser(name: string): string;
}

@injectable()
export class UserService implements IUserService {
    id: Guid;
    constructor() {
        this.id = Guid.create();
    }

    findUser(name: string): string {
        return "UserService: " + this.id.toString();
    }
}