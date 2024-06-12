import { TodoList } from "@/components/Todo/TodoList";
import {
  createTable,
  deleteTodo,
  getTodos,
  Todo,
  updateTodo,
} from "@/database/database";
import { HomeScreenNavigationProp } from "@/types/types";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Appbar, FAB } from "react-native-paper";

const HomeScreen = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const init = async () => {
      await createTable();
      await loadTodos();
    };
    init();
  }, [todos]);

  const loadTodos = async () => {
    const todosFromDb = await getTodos();
    setTodos(todosFromDb);
  };

  const toggleDone = async (id: number, done: boolean) => {
    await updateTodo(id, done);
    loadTodos();
  };

  const deleteTodo = async (id: number) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="To do List" />
      </Appbar.Header>
      <TodoList todos={todos} onToggleDone={toggleDone} onDelete={deleteTodo} />
      <View style={styles.view}>
        <Link href="/create-todo">
          <FAB icon="plus" color="white" />
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  view: {
    display: "flex",
    marginLeft: "auto",
    right: 0,
    bottom: 0,
  },
});
export default HomeScreen;
