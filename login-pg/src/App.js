
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login from './components/loginpage';
import Addpg from './components/Addpg';
function App() {
  return (
    <Router>
    <div className='App'>
      <Routes>
<Route path="/login" element={<Login/>}/>
<Route path="/add" element={<Addpg/>}/>
</Routes>
     <Login/> 
    
    </div>
    </Router>
  );
}

export default App;
