import { useState } from "react";

export function AddTodo() {
  const [newTodo, setNewTodo] = useState("");

  return (
    <form onSubmit={handle new}>
      <input
        type="text"
        placeholder="Novo to-do/>"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      
      <button type="submit">Adicionar</button>
    </form>
  );
}
