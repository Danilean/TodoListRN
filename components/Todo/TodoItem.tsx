import React from "react";
import { List, Checkbox, IconButton } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Todo } from "@/database/database";

interface TodoItemProps {
  todo: Todo;
  onToggleDone: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
}

export const TodoItem = ({ todo, onToggleDone, onDelete }: TodoItemProps) => {
  return (
    <List.Item
      title={todo.title}
      left={() => (
        <Checkbox
          status={todo.done ? "checked" : "unchecked"}
          onPress={() => onToggleDone(todo.id, !todo.done)}
        />
      )}
      right={() => (
        <IconButton icon="delete" onPress={() => onDelete(todo.id)} />
      )}
      style={styles.item}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    display: "flex",
  },
});
