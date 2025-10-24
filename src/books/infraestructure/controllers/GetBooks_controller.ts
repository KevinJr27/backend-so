import { Request, Response } from "express";
import { GetBooksUseCase } from "../../application/useCases/GetBooks_useCase";

export class GetBooksController {
    constructor (private readonly getBooksUseCase: GetBooksUseCase){}

    execute = async (req: Request, res: Response): Promise<any> => {
        try {
            const books = await this.getBooksUseCase.execute();
            return res.status(200).json(books);
        } catch (err: any) {
            console.error(err);
            return res.status(500).json({ message: err.message });
        }
    }

}