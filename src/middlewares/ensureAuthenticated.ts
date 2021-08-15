import {NextFunction, Request, Response} from "express";
import "express-async-errors";
import {verify} from "jsonwebtoken";
import {AppError} from "../errors/AppError";
import {UsersRepository} from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
	sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		throw new AppError("token missing", 401);
	}

	const [, token] = authHeader.split(" ");
	try {
		const {sub: user_id} = verify(token, "9efb10984c2cf9bafe96ff65f833d51a") as IPayload;

		const usersRepository = new UsersRepository();

		const user = await usersRepository.findById(user_id);

		if (!user) {
			throw new AppError("User does not exist", 401);
		}

		request.user = {
			id: user_id,
		};

		next();
	} catch (error) {
		throw new AppError("Invalid token", 401);
	}
}
