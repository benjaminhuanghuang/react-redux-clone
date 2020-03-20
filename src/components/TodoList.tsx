import React from "react";
//
import { Todo, BUILTIN_TAGS } from "./models";


export interface TodoListProps {
  todos: Todo[];
  removeTodo: (index: number) => void;
  addTag: (index: number, tag: string) => void;
  removeTag: (index: number, tag: string) => void;
}
export default function TodoList() {
  return <div></div>;
}
