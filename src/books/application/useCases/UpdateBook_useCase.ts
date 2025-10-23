import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../../domain/repositories/IBook_repository";
import { BookId } from "../../domain/valueObjects/BookId_valueObject";

export class UpdateBookUseCase {
  constructor(private readonly dbBookRepository: BookRepository) {}

  async execute(id: BookId, updatedBook: Book): Promise<void> {
    await this.dbBookRepository.update(id, updatedBook);
  }
}
