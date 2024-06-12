import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("todos.db");

export const createTable = async () => {
  const database = await db;
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      title TEXT NOT NULL, 
      done INT NOT NULL
    );
  `);
};

export const getTodos = async (): Promise<Todo[]> => {
  const database = await db;
  return await database.getAllAsync("SELECT * FROM todos");
};

export const insertTodo = async (title: string) => {
  const database = await db;
  await database.runAsync("INSERT INTO todos (title, done) VALUES (?, 0)", [
    title,
  ]);
};

export const updateTodo = async (id: number, done: boolean) => {
  const database = await db;
  await database.runAsync("UPDATE todos SET done = ? WHERE id = ?", [
    done ? 1 : 0,
    id,
  ]);
};

export const deleteTodo = async (id: number) => {
  const database = await db;
  await database.runAsync("DELETE FROM todos WHERE id = ?", [id]);
};

export interface Todo {
  id: number;
  title: string;
  done: number;
}
