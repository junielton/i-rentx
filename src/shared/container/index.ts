import {container} from "tsyringe";
import {CategoriesRepository} from "../../modules/cars/repositories/implementations/CategoriesRepository";
import {ICategoryRepository} from "../../modules/cars/repositories/ICategoryRepository";
import {SpecificationRepository} from "../../modules/cars/repositories/implementations/SpecificationRepository";
import {ISpecificationRepository} from "../../modules/cars/repositories/ISpecificationRepository";
import {UsersRepository} from "../../modules/accounts/repositories/implementations/UsersRepository";
import {IUsersRepository} from "../../modules/accounts/repositories/IUsersRepository";

container.registerSingleton<ICategoryRepository>("CategoriesRepository", CategoriesRepository);
container.registerSingleton<ISpecificationRepository>("SpecificationRepository", SpecificationRepository);
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
