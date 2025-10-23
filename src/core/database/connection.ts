export interface IDatabaseConnection {
  query(query: string, params?: any[]): Promise<any[]>;
  execute(query: string, params?: any[]): Promise<any>;
}
