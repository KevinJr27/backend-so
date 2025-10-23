import { Request, Response } from "express";
import { DeleteBookUseCase } from "../../application/useCases/DeleteBook_useCase";
import { BookId } from "../../domain/valueObjects/BookId_valueObject";

export class DeleteBookController {
    constructor(private readonly deleteBookUseCase: DeleteBookUseCase) {}

    execute = async (req: Request, res: Response): Promise<any> => {
        try {
            const { bookId } = req.params;
            const id = new BookId(bookId);

            await this.deleteBookUseCase.execute(id);

            return res.json({ message: "Book deleted successfully" });
        } catch (err: any) {
            console.error(err);
            return res.status(500).json({ message: err.message });
        }
    }
}
