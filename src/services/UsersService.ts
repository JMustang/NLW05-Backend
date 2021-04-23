import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);
    // Verificar se o Usuario existe
    const userExists = await usersRepository.findOne({});
    // se nao existe, salvar no DB
    if (userExists) {
      return userExists;
    }
    // se existe, retorna user
    const user = usersRepository.create({
      email,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { UserService };
