
import {compare} from 'bcrypt'
import {inject, injectable} from "tsyringe";
import {sign} from 'jsonwebtoken'

import { IUsersRepository } from "../../repositories/IUsersRepository";


interface IRequest{
	email: string;
	password: string;
}

interface IResponse {
	user: {
		name: string
		email: string;
	},
	token: string;
}

@injectable()
class AuthenticateUserUseCase{
	constructor(
		@inject("UsersRepository")
		private usersRepository: IUsersRepository
	){}

	async execute({email, password}: IRequest): Promise<IResponse>{
		const user = await this.usersRepository.findByEmail(email);

		if(!user){
			throw new Error("Email or password incorrect!")
		}

		const passwordMatch =  await compare(password, user.password);

		if(!passwordMatch){
			throw new Error("Email or password incorrect!")
		}

		const token = sign({}, "9efb10984c2cf9bafe96ff65f833d51a", {
			subject: user.id,
			expiresIn: "1d"
		})

		const tokenReturn: IResponse = {
			token,
			user:{
				name: user.name,
				email: user.email,
			}
		}

		return tokenReturn;
	}
}

export {AuthenticateUserUseCase}