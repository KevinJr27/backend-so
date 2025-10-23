import { BookAuthor } from "../valueObjects/BookAuthor_valueObject";
import { BookId } from "../valueObjects/BookId_valueObject";
import { BookPublishedYear } from "../valueObjects/BookPublishedYear_valueObject";
import { BookTitle } from "../valueObjects/BookTitle_valueObject";

export class Book {
    constructor(
        private id: BookId | null,
        private title: BookTitle,
        private author: BookAuthor,
        private publishedYear: BookPublishedYear
    ) { }

    getIdValue(): string | null {
        return this.id?.getValue() ?? null;
    }

    getTitle(): string {
        return this.title.getValue();
    }

    getAuthor(): string {
        return this.author.getValue();
    }

    getPublishedYear(): number {
        return this.publishedYear.getValue();
    }
}
