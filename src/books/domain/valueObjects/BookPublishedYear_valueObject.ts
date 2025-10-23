export class BookPublishedYear {
  constructor(private readonly value: number) {
    const currentYear = new Date().getFullYear();
    if (value < 0 || value > currentYear) {
      throw new Error('Invalid published year');
    }
  }

  getValue(): number {
    return this.value;
  }
}
