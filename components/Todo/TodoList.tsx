import React from "react";
import { FlatList } from "react-native";
import { TodoItem } from "./TodoItem";
import { Todo } from "@/database/database";

interface TodoListProps {
  todos: Todo[];
  onToggleDone: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
}

export const TodoList = ({ todos, onToggleDone, onDelete }: TodoListProps) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <TodoItem todo={item} onToggleDone={onToggleDone} onDelete={onDelete} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
