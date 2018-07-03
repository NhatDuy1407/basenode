import { BaseRepository } from "./base/BaseRepository";
import { UserModel } from "../models/user"

export class UserRepository extends BaseRepository<UserModel>{

    count(): Promise<number> {
        return this._collection.count({})
    }
}

Object.seal(UserRepository);