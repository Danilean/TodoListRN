import { insertTodo } from "@/database/database";
import { AddTaskScreenNavigationProp } from "@/types/types";
import { Link } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import { router } from "expo-router";

export default function TabTwoScreen() {
  const [title, setTitle] = useState("");

  const addTodo = async () => {
    if (title.trim().length > 0) {
      await insertTodo(title);
      router.push("/");
      setTitle("");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Link href={"/"}>
          <Appbar.BackAction />
        </Link>
        <Appbar.Content title="Cadastrar sua Tarefa" />
      </Appbar.Header>
      <TextInput
        label="Nome da Tarefa"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Button mode="contained" onPress={addTodo} style={styles.button}>
        Adicionar
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#90EE90",
    marginTop: 16,
  },
});
