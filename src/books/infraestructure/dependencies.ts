import { MySQLBook } from "./adapters/MySQLBook";

import { CreateBookUseCase } from "../application/useCases/CreateBook_useCase";
import { FindBookByIdUseCase } from "../application/useCases/FindBookById_useCase";
import { UpdateBookUseCase } from "../application/useCases/UpdateBook_useCase";
import { DeleteBookUseCase } from "../application/useCases/DeleteBook_useCase";

import { CreateBookController } from "./controllers/CreateBook_controller";
import { FindBookByIdController } from "./controllers/FindBookById_controller";
import { UpdateBookController } from "./controllers/UpdateBook_controller";
import { DeleteBookController } from "./controllers/DeleteBook_controller";
import { GetBooksUseCase } from "../application/useCases/GetBooks_useCase";
import { GetBooksController } from "./controllers/GetBooks_controller";

// Repositorio concreto
const mySQLBook = new MySQLBook();

// Use Cases
const createBookUC = new CreateBookUseCase(mySQLBook);
const updateBookUC = new UpdateBookUseCase(mySQLBook);
const deleteBookUC = new DeleteBookUseCase(mySQLBook);
const getBookByIdUC = new FindBookByIdUseCase(mySQLBook);
const getBooksUC = new GetBooksUseCase(mySQLBook);

// Controllers
export const createBookC = new CreateBookController(createBookUC);
export const updateBookC = new UpdateBookController(updateBookUC);
export const deleteBookC = new DeleteBookController(deleteBookUC);
export const findBookByIdC = new FindBookByIdController(getBookByIdUC);
export const getBooksC = new GetBooksController(getBooksUC);

