
import AddTodo from './components/AddTodo';
import TaskList from './components/TaskList';
import { UseSelector, useDispatch } from 'react-redux';
import { addTodo } from './Redux/store';

function App() {
  return (
    <div className="App">
      <h1>Tasks:</h1>
      <AddTodo />
      <TaskList />
    </div>
  );
}

export default App;
