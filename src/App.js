import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import NavBarApp from './components/NavBarApp';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Students from './pages/Students';
import AddStudent from './pages/AddStudent';


function App() {
  return (
    <div className="App">
      <NavBarApp/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path='/edituser/:id' element={<EditUser/>}/>
      <Route path='/students' element={<Students/>}/>
      <Route path='/students/addstudent' element={<AddStudent/>}/>
      
     </Routes>
    </div>
  );
}

export default App;
