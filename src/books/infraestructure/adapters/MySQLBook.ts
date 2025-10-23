
import { Book } from "../../domain/entities/Book";
import { BookId } from "../../domain/valueObjects/BookId_valueObject";
import { BookTitle } from "../../domain/valueObjects/BookTitle_valueObject";
import { BookAuthor } from "../../domain/valueObjects/BookAuthor_valueObject";
import { BookPublishedYear } from "../../domain/valueObjects/BookPublishedYear_valueObject";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { BookRepository } from "../../domain/repositories/IBook_repository";
import { MySQLConnection } from "../../../core/database/mysql-connection";

export class MySQLBook implements BookRepository {
  private db: MySQLConnection;

  constructor() {
    this.db = MySQLConnection.getInstance();
  }

  async create(book: Book): Promise<void> {
    const query = `
      INSERT INTO books (id, title, author, published_year)
      VALUES (?, ?, ?, ?)
    `;
    await this.db.execute(query, [
      book.getIdValue(),
      book.getTitle(),
      book.getAuthor(),
      book.getPublishedYear(),
    ]);
  }

  async findById(id: BookId): Promise<Book | null> {
    const query = `SELECT * FROM books WHERE id = ?`;
    const rows = await this.db.query(query, [id.getValue()]) as RowDataPacket[];

    if (rows.length === 0) return null;

    const row = rows[0];

    return new Book(
      new BookId(row.id),
      new BookTitle(row.title),
      new BookAuthor(row.author),
      new BookPublishedYear(row.published_year)
    );
  }

  async update(id: BookId, book: Book): Promise<void> {
    const query = `
      UPDATE books
      SET title = ?, author = ?, published_year = ?
      WHERE id = ?
    `;

    const result = await this.db.execute(query, [
      book.getTitle(),
      book.getAuthor(),
      book.getPublishedYear(),
      id.getValue(),
    ]) as ResultSetHeader;

    if (result.affectedRows === 0) {
      throw new Error('Book not found');
    }
  }

  async delete(id: BookId): Promise<void> {
    const query = `DELETE FROM books WHERE id = ?`;
    const result = await this.db.execute(query, [id.getValue()]) as ResultSetHeader;

    if (result.affectedRows === 0) {
      throw new Error('Book not found');
    }
  }
}
