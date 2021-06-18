import {inject, injectable} from "tsyringe";
import {IUsersRepository} from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
	constructor(
		@inject("UsersRepository")
		private userRepository: IUsersRepository
	) {}

	async execute({name, username, password, email, driver_license}): Promise<void> {
		await this.userRepository.create({
			name,
			username,
			password,
			email,
			driver_license,
		});
	}
}

export {CreateUserUseCase};