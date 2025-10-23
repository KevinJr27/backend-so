import mysql, { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { IDatabaseConnection } from './connection';
import { config } from '../config';

export class MySQLConnection implements IDatabaseConnection {
  private static instance: MySQLConnection;
  private pool: Pool;

  private constructor() {
    try {
      this.pool = mysql.createPool({
        host: config.DB_HOST,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        database: config.DB_DATABASE,
        waitForConnections: true,
        connectionLimit: 10,
      });
      console.log('MySQL connection pool created successfully');
    } catch (error) {
      console.error('Error creating MySQL connection pool:', error);
      throw new Error('Failed to initialize MySQL connection');
    }
  }

  public static getInstance(): MySQLConnection {
    if (!MySQLConnection.instance) {
      MySQLConnection.instance = new MySQLConnection();
      console.log('MySQL pool created');
    }
    return MySQLConnection.instance;
  }

  async query(query: string, params: any[] = []): Promise<RowDataPacket[]> {
    try {
      const [rows] = await this.pool.query<RowDataPacket[]>(query, params);
      return rows;
    } catch (err: any) {
      console.error('Error executing query:', query, err.message);
      throw new Error(`Database query error: ${err.message}`);
    }
  }

  async execute(query: string, params: any[] = []): Promise<ResultSetHeader> {
    try {
      const [result] = await this.pool.execute<ResultSetHeader>(query, params);
      return result;
    } catch (err: any) {
      console.error('Error executing statement:', query, err.message);
      throw new Error(`Database execution error: ${err.message}`);
    }

  }
}
