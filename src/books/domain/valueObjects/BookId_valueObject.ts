export class BookId {
  private readonly value: string;

  constructor(id: string) {
    if (!BookId.isValidUUID(id)) {
      throw new Error('Invalid UUID for BookId');
    }
    this.value = id;
  }

  getValue(): string {
    return this.value;
  }

  private static isValidUUID(id: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(id);
  }
}
