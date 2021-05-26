import {Category} from "../entities/categories";

interface ICreateCategoryDTO {
	name: string;
	description: string;
}

interface ICategoryRepository {
	findByName(name: string): Category;
	list(): Category[];
	create({name, description}: ICreateCategoryDTO): void;
}

export {ICategoryRepository, ICreateCategoryDTO};
