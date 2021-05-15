import {categoriesRoutes} from "../../../../routes/categories.routes";
import {Category} from "../../models/categories";
import {ICategoryRepository} from "../../repositories/ICategoryRepository";

class ListCategoriesUseCase {
	constructor(private categoriesRepository: ICategoryRepository) {}

	execute(): Category[] {
		const categories = this.categoriesRepository.list();

		return categories;
	}
}

export {ListCategoriesUseCase};
