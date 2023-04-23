
import './App.css';
import{BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import home from './pages/home/home'
import logo from './images/logo.webp'
import user from './pages/user/user'
import drug from './pages/drug/drug'
import Hospitals from "./pages/Hospitals/Hospitals"
import Doctors from "./pages/Doctors/Doctors"
import login from './pages/login/login'
import About from './pages/About/About'
import yuyue from "./pages/yuyue/yuyue"
import Medicines from './pages/Medicines/Medicines'
function App() {
  return (
    <Router>
    <div className="App">
  <div className='box'>
<div className='app_heasdedr'>
<div className='hear'>

<div className='logo'>
  <img src={logo}></img>
 
</div>
<div className='title'>
<span>MedicalService <br></br>
inNewZealand
</span>
</div>
<div className="daohang">

<Link className='dsds' to="/About">About Us</Link>
<Link className='dsds' to="/yuyue">help</Link>

<div className='dsds'>FAQs</div>
<div className='dsds'>Feedback</div>
<div className='dsds'>Get the APP</div>
<Link className='dsds' to="/login">log in</Link>



</div>
<div className="sdasa" >
profile<br></br>
photo
</div>
</div>
</div>

  <div className='navs'>
 <div className='nacBox'> 


   
      
  
  

 


<Link className='dsdsaa' to="/home">Book</Link>
<Link className='dsdsaa' to="/Hospitals">Hospitals</Link>

<Link className='dsdsaa' to="/user">Clinics</Link>
<Link className='dsdsaa' to="/drug">Pharmacies</Link>
    <Link className='dsdsaa' to="/Doctors">Doctors</Link>
    
    <Link className='dsdsaa' to="/Medicines">Medicines</Link>

  
 </div>
  </div>
  
  <Routes>
  <Route path='/login' Component={login}></Route>
  <Route path='/About' Component={About}></Route>
  <Route path='/yuyue' Component={yuyue}></Route>
  <Route path='/' Component={home}></Route>
  <Route path='/Medicines' Component={Medicines}></Route>
    <Route path='/home' Component={home}></Route>
  <Route path='/user' Component={user}></Route>
  <Route path='/drug' Component={drug}></Route>
  <Route path='/Doctors' Component={Doctors}></Route>
  <Route path='/Hospitals' Component={Hospitals}></Route>
  
  </Routes>
  </div>
    </div>
    </Router>
  );
}

export default App;
