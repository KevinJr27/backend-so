import { Request, Response } from "express";
import { CreateBookUseCase } from "../../application/useCases/CreateBook_useCase";
import { Book } from "../../domain/entities/Book";
import { BookId } from "../../domain/valueObjects/BookId_valueObject";
import { BookTitle } from "../../domain/valueObjects/BookTitle_valueObject";
import { BookAuthor } from "../../domain/valueObjects/BookAuthor_valueObject";
import { BookPublishedYear } from "../../domain/valueObjects/BookPublishedYear_valueObject";
import { v4 as uuidv4 } from 'uuid';

export class CreateBookController {

    constructor(private readonly createBookUseCase: CreateBookUseCase) {}

    execute = async (req: Request, res: Response): Promise<any> => {
        try {
            const { title, author, publishedYear } = req.body;

            const book = new Book(
                new BookId(uuidv4()), 
                new BookTitle(title),
                new BookAuthor(author),
                new BookPublishedYear(Number(publishedYear))
            );

            await this.createBookUseCase.execute(book);

            return res.status(201).json({
                message: "Book created successfully",
                data: {
                    id: book.getIdValue(),
                    title: book.getTitle(),
                    author: book.getAuthor(),
                    publishedYear: book.getPublishedYear()
                }
            });

        } catch (err: any) {
            console.error(err);
            return res.status(500).json({
                message: "Failed to create book",
                error: err.message
            });
        }
    }
}
