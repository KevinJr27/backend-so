export class BookAuthor {
  private readonly value: string;

  constructor(value: string) {
    if (!value || value.trim() === '') {
      throw new Error('Author cannot be empty');
    }
    if (value.length > 100) {
      throw new Error('Author name too long');
    }
    this.value = value.trim();
  }

  getValue(): string {
    return this.value;
  }

}
