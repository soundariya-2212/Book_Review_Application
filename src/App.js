import './assets/Css/style.css';
import Nav from './components/Nav';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from'./components/Dashboard'
import Review from './components/Review';
import {Route,Routes} from "react-router-dom";
import Home from './components/Home';
// import About from './components/About';
// import Sidebar from './components/Sidebar'
function App()
{
    return(
      <>
      <div>
        <Nav/>
        {/* <About/> */}
      </div>
      <div>
        <Routes>
           <Route path="/Dashboard" element={<Dashboard/>}/>
           <Route path="/Home" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Review" element={<Review/>}/>
        </Routes>  
         {/* <Login/> */}
      </div>
      </>
      
    )
}
export default App;
