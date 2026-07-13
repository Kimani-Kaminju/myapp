import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import TaskComponent from './components/Taskcomponent';
import Secondcomponent from './components/Secondcomponent';
import Tasktwocomponent from './components/Tasktwocomponent';
import Thirdcomponent from './components/Thirdcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to leraning ReactJs</h1>        
        </header>
        <Firstcomponent/>
        <TaskComponent/>
        <Secondcomponent/>
        <Tasktwocomponent/>
        <Thirdcomponent/>
    </div>
  );
}

export default App;
