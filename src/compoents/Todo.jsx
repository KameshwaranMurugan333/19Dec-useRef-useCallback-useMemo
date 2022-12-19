import React, { memo } from "react";

const Todo = ({ todos = [], addTodo }) => {
    return <div>
        <h1>My Todos</h1>
        {todos.map((todo, key) => {
            return <h4 key={key}>{todo}</h4>
        })}

        <button onClick={addTodo} >Add Todo</button>
    </div>
}

export default memo(Todo)