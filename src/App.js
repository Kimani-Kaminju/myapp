import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import TaskComponent from './components/Taskcomponent';
import Secondcomponent from './components/Secondcomponent';
import Tasktwocomponent from './components/Tasktwocomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Taskthreecomponent from './components/Taskthreecomponent';
import Assignment from './components/Assignment';
import Notfound from './components/Notfound'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1>Welcome to learning ReactJs</h1>        
        </header>
        <nav>
          <Link to="/" className='myLink'>Home</Link>
          <Link to="/second" className='myLink'>Second</Link>
          <Link to="/third" className='myLink'>Third</Link>
          <Link to="/task1" className='myLink'>Task</Link>
          <Link to="/task2" className='myLink'>Task2</Link>
          <Link to="/task3" className='myLink'>Task3</Link>
          <Link to="/assign" className='myLink'>Assignment</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Firstcomponent/>}/>
          <Route path='/second'element={<Secondcomponent/>}/>
          <Route path='/third'element={<Thirdcomponent/>}/>
          <Route path='/task1'element={<TaskComponent/>}/>
          <Route path='/task2'element={<Thirdcomponent/>}/>
          <Route path='/task3'element={<Taskthreecomponent/>}/>
          <Route path='/assign'element={<Assignment/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
        
    </div>
    </Router>
  );
}

export default App;
