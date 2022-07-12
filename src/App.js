import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import NavBarApp from './components/NavBarApp';
import AddUser from './pages/AddUser';


function App() {
  return (
    <div className="App">
      <NavBarApp/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
     </Routes>
    </div>
  );
}

export default App;
