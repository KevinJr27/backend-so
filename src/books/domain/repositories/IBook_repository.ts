import { Book } from "../entities/Book";
import { BookId } from "../valueObjects/BookId_valueObject";

export interface BookRepository {
  create(book: Book): Promise<void>;
  findById(id: BookId): Promise<Book | null>;
  update(id: BookId, book: Book): Promise<void>;
  delete(id: BookId): Promise<void>;
}