import { Request, Response } from "express";
import { UpdateBookUseCase } from "../../application/useCases/UpdateBook_useCase";
import { Book } from "../../domain/entities/Book";
import { BookId } from "../../domain/valueObjects/BookId_valueObject";
import { BookTitle } from "../../domain/valueObjects/BookTitle_valueObject";
import { BookAuthor } from "../../domain/valueObjects/BookAuthor_valueObject";
import { BookPublishedYear } from "../../domain/valueObjects/BookPublishedYear_valueObject";

export class UpdateBookController {
    constructor(private readonly updateBookUseCase: UpdateBookUseCase) {}

    execute = async (req: Request, res: Response): Promise<any> => {
        try {
            const { bookId } = req.params;
            const { title, author, publishedYear } = req.body;

            const id = new BookId(bookId);

            const updatedBook = new Book(
                id,
                new BookTitle(title),
                new BookAuthor(author),
                new BookPublishedYear(Number(publishedYear))
            );

            console.log(updatedBook)

            await this.updateBookUseCase.execute(id, updatedBook);

            return res.json({ message: "Book updated successfully" });
        } catch (err: any) {
            console.error(err);
            return res.status(500).json({ message: err.message });
        }
    }
}
