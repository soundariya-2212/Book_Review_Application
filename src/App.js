import './assets/Css/style.css';
import Nav from './components/Nav';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from'./components/Dashboard'
import Review from './components/Review';
import {Route,Routes} from "react-router-dom";
import Home from './components/Home';
function App()
{
    return(
      <>
      <div>
        <Nav/>
      </div>
      <div>
        <Routes>
           <Route path="/Dashboard" element={<Dashboard/>}/>
           <Route path="/" element={<Home/>}/>
           <Route path="/Home" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Review" element={<Review/>}/>
        </Routes> 
      </div>
      </>
    )
}
export default App;
// import React from 'react';
// import Nav from './components/Nav';
// import { Routes, Route } from 'react-router-dom';
// import User from './Pages/User';
// import AddUser from './Pages/AddUser';
// import EditUser from './Pages/EditUser';
// import AddUser from './Pages/Adduser';
// import EditUser from './Pages/Edituser';
// import Dashboard from './components/Dashboard';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import Review from './components/Review';

// const App = () => {
//   return (
//     <>
//     <div>
//       <Nav/>
//     </div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/user" element={<User />} />
//         <Route path="/user/add" element={<AddUser />} />
//         <Route path="/user/edit/:id" element={<EditUser />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/review" element={<Review />} />
//       </Routes>
//     </>
//   );
// };

// export default App;
