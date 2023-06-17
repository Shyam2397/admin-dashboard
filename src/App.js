import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Button from './pages/Button';
import Cards from './pages/Cards';
import Colors from './pages/Colors';
import Border from './pages/Border';
import Animations from './pages/Animations';
import Others from './pages/Others';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import NoPage from './pages/NoPage';
import BlankPage from './pages/BlankPage';
import Charts from './pages/Charts';
import Tables from './pages/Tables';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<DashBoard/>}/>
        <Route path='/button' element={<Button/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/colors' element={<Colors/>}/>
        <Route path='/borders' element={<Border/>}/>
        <Route path='/animations' element={<Animations/>}/>
        <Route path='/other' element={<Others/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgotpassword' element={<ForgetPassword/>}/>
        <Route path='/404/error' element={<NoPage/>}/>
        <Route path='/blankpage' element={<BlankPage/>}/>
        <Route path='/charts' element={<Charts/>}/>
        <Route path='/tables' element={<Tables/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/settings' element={<Settings/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
