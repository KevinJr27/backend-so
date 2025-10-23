import { BookRepository } from "../../domain/repositories/IBook_repository";
import { BookId } from "../../domain/valueObjects/BookId_valueObject";

export class DeleteBookUseCase {
  constructor(private readonly dbBookRepository: BookRepository) {}

  async execute(id: BookId): Promise<void> {
    await this.dbBookRepository.delete(id);
  }
}
