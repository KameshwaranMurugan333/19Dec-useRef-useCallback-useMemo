import logo from './logo.svg';
import './App.css';
import Todo from './compoents/Todo';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { withBorder } from './HOC';

function App(props) {

  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [calc, setCalc] = useState(0);
  const calculation = useMemo(() => give1oxTimeOfCount(count), [count]);

  const addTodo = useCallback(() => {
    setTodos([...todos, 'My New Todo'])
  }, [todos])

  useEffect(() => {
    setCalc(give1oxTimeOfCount(count));
  },[count])

  return (
    <div className="App">
      <Todo todos={todos} addTodo={addTodo} />

      <h1>Count: {count}</h1>
      <button onClick={(e) => setCount(count + 1)} >Increment</button>

      <p>{props.myProp}</p>

      <h1>Calculation: {calculation}</h1>
      <h1>Calculation: {calc}</h1>
    </div>
  );
}

export default withBorder(App);


const give1oxTimeOfCount = (num) => {
  console.log("I am calculating...");
  for (let i = 0; i < 1000000; i++) {
    num += 1;
  }
  return num;
}
