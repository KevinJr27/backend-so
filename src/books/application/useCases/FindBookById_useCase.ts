import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../../domain/repositories/IBook_repository";
import { BookId } from "../../domain/valueObjects/BookId_valueObject";

export class FindBookByIdUseCase {
    constructor (private readonly dbBookRepository: BookRepository){}

    async execute (bookId: BookId): Promise<Book | null> {
        return await this.dbBookRepository.findById(bookId);
    }
}