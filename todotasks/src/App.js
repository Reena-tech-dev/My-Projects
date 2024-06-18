import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  display: inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
`;

const Text = styled.input`
  border: 2px solid #000;
  width: 200px;
  padding: 5px;
  border-radius: 2px;
  margin: 5px;
`;

const TaskCount = styled.span`
  margin: 10px;
`;

const Tasks = styled.div``;

const LIST = styled.li`
  list-style: none;
  text-decoration: ${props => (props.complete ? 'line-through' : 'none')};
`;

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  const handleClick = () => {
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      }
    ]);
    setInput("");
  };

  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id === id) {
        if (!task.complete) {
          setCompletedTaskCount(completedTaskCount + 1);
        }
        item = { ...task, complete: !task.complete };
      } else {
        item = { ...task };
      }
      return item;
    });
    setTodoList(list);
  };

  return (
    <Container>
      <div>
        <h1>To Do List</h1>
        <Text value={input} onChange={(e) => setInput(e.target.value)} />
        <Button onClick={handleClick}>ADD</Button>
        <Tasks>
          <TaskCount>
            <b>Pending Tasks: {todoList.filter(task => !task.complete).length}</b>
          </TaskCount>
          <TaskCount>
            <b>Completed Tasks: {completedTaskCount}</b>
          </TaskCount>
        </Tasks>
        <div>
          <ul>
            {todoList.map((todo) => {
              return (
                <LIST
                  key={todo.id}
                  complete={todo.complete}
                  onClick={() => handleComplete(todo.id)}
                >
                  {todo.task}
                </LIST>
              );
            })}
          </ul>
        </div>
        <Button onClick={() => setTodoList([])}>Clear</Button>
      </div>
    </Container>
  );
}

export default App;
