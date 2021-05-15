import {CategoriesRepository} from "../repositories/CategoriesRepository";
import {ICategoryRepository} from "../repositories/ICategoryRepository";

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoryService {
	constructor(private categoriesRepository: ICategoryRepository) {}

	execute({description, name}: IRequest): void {
		const categoryAllReadyExists = this.categoriesRepository.findByName(name);

		if (categoryAllReadyExists) {
			throw new Error("Category all ready exists");
		}

		this.categoriesRepository.create({name, description});
	}
}

export {CreateCategoryService};
