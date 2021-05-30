import {CategoriesRepository} from "../../repositories/implementations/CategoriesRepository";
import {ImportCategoryController} from "./ImportCategoryController";
import {ImportCategoryUseCase} from "./ImportCategoryUseCase";

const categoryRepository = null; //CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export {importCategoryController};
