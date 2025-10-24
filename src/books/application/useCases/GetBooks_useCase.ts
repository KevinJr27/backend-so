import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../../domain/repositories/IBook_repository";

export class GetBooksUseCase {
    constructor (private readonly dbBookRepository: BookRepository){}

    async execute (): Promise<Book[] | null> {
        return await this.dbBookRepository.getBooks();
    }
}