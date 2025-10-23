import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../../domain/repositories/IBook_repository";

export class CreateBookUseCase {
    constructor (private readonly dbBookRepository: BookRepository){}

    async execute (book: Book): Promise<void> {
        await this.dbBookRepository.create(book);
    }
}