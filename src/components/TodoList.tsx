import React from "react";
export interface TodoListProps {
  todos: Todo[];
  removeTodo: (index: number) => void;
  addTag: (index: number, tag: string) => void;
  removeTag: (index: number, tag: string) => void;
}
export default function TodoList() {
  return <div></div>;
}
