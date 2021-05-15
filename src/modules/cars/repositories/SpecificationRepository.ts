import {Specification} from "../models/Specification";
import {ISpecificationRepository, ISpecificationRepositoryDTO} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
	private specification: Specification[];

	constructor() {
		this.specification = [];
	}

	create({description, name}: ISpecificationRepositoryDTO): void {
		const specification = new Specification();

		Object.assign(specification, {
			name,
			description,
			created_at: new Date()
		});

		this.specification.push(specification);
	}

	findByName(name: string): Specification {
		const specification = this.specification.find(specification => specification.name === name);

		return specification;
	}
}

export {SpecificationRepository};
