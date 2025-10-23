export class BookTitle {
  constructor(private readonly value: string) {
    if (!value || value.trim() === '') {
      throw new Error('Title cannot be empty');
    }
    if (value.length > 50) {
      throw new Error('Title too long');
    }
  }

  getValue(): string {
    return this.value;
  }
}
