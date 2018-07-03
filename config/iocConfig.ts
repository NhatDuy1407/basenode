import "reflect-metadata";
import { Container } from "inversify";


import { SERVICE_IDENTIFIER, CONTROLLER_IDENTIFIER } from "../constants";
import { HomeController } from "../routes/controllers";
import { IUserService, UserService } from "../services/userService";

let container = new Container();
container.bind<HomeController>(CONTROLLER_IDENTIFIER.HomeController).to(HomeController);
container.bind<IUserService>(SERVICE_IDENTIFIER.UserService).to(UserService);

export default container; 