import express from 'express';
import { createBookC, deleteBookC, findBookByIdC, getBooksC, updateBookC } from '../dependencies';

export const bookRouter = express.Router();

bookRouter.post("/", createBookC.execute);
bookRouter.get("/", getBooksC.execute);
bookRouter.get("/:bookId", findBookByIdC.execute);
bookRouter.put("/:bookId", updateBookC.execute);
bookRouter.delete("/:bookId", deleteBookC.execute);