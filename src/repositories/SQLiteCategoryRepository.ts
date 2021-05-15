import {Category} from "../models/categories";
import {ICategoryRepository, ICreateCategoryDTO} from "./ICategoryRepository";

class SQLiteCategoryRepository implements ICategoryRepository {
	findByName(name: string): Category {
		console.log(name);
		return null;
	}
	list(): Category[] {
		return null;
	}
	create({name, description}: ICreateCategoryDTO): void {
		return null;
	}
}

export {SQLiteCategoryRepository};
