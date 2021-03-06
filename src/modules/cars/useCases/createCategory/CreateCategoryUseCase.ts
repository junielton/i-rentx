import {inject, injectable} from "tsyringe";
import {AppError} from "../../../../errors/AppError";
import {ICategoryRepository} from "../../repositories/ICategoryRepository";

interface IRequest {
	name: string;
	description: string;
}

@injectable()
class CreateCategoryUseCase {
	constructor(
		@inject("CategoriesRepository")
		private categoriesRepository: ICategoryRepository
	) {}

	async execute({description, name}: IRequest): Promise<void> {
		const categoryAllReadyExists = await this.categoriesRepository.findByName(name);
		console.log("create category use case");

		if (categoryAllReadyExists) {
			throw new AppError("Category all ready exists");
		}

		this.categoriesRepository.create({name, description});
	}
}

export {CreateCategoryUseCase};
