import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import NavBarApp from './components/NavBarApp';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';


function App() {
  return (
    <div className="App">
      <NavBarApp/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path='/edituser/:id' element={<EditUser/>}/>
     </Routes>
    </div>
  );
}

export default App;
