import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login2'
import Dashboard from './components/Dashboard'
import './App.css';

function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Login/>}></Route>
     <Route path="/Dashboard" element={<Dashboard/>}></Route>
    </Routes>
    
    </> 
    );
}

export default App;
