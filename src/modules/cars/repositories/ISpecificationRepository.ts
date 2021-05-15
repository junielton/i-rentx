import {Specification} from "../models/Specification";

interface ISpecificationRepositoryDTO {
	name: string;
	description: string;
}

interface ISpecificationRepository {
	create({description, name}: ISpecificationRepositoryDTO): void;

	findByName(name: string): Specification;
}

export {ISpecificationRepository, ISpecificationRepositoryDTO};