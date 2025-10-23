import { Request, Response } from "express";
import { BookId } from "../../domain/valueObjects/BookId_valueObject";
import { FindBookByIdUseCase } from "../../application/useCases/FindBookById_useCase";

export class FindBookByIdController {
    constructor(private readonly getBookByIdUseCase: FindBookByIdUseCase) {}

    execute = async (req: Request, res: Response): Promise<any> => {
        try {
            const { bookId } = req.params;
            const id = new BookId(bookId);

            const book = await this.getBookByIdUseCase.execute(id);

            if (!book) {
                return res.status(404).json({ message: "Book not found" });
            }

            return res.json({
                id: book.getIdValue(),
                title: book.getTitle(),
                author: book.getAuthor(),
                publishedYear: book.getPublishedYear()
            });
        } catch (err: any) {
            console.error(err);
            return res.status(500).json({ message: err.message });
        }
    }
}
