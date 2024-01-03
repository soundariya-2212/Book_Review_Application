// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import '../assets/Css/style.css'
// import Nav from '../components/Nav.js'
// // import About from '../components/About.js'
// // import { Link } from 'react-router-dom'
// // import { Children } from 'react'
// import {LibraryBig,Menu,Settings,Store,LogOut,CircleUserRound} from 'lucide-react'
// const Sidebar=()=>
// {
//     // const[isOpen,setIsOpen]=useState(false);
//     // const toggle=()=>setIsOpen(!isOpen);
//     const menuItem=[
//         {
//             path:"/Accounts",
//             name:"Accounts",
//             icon:<CircleUserRound />
//         },
//         {
//             path:"/Essays",
//             name:"Essays",
//             icon:<LibraryBig />
//         },
//         {
//             path:"/About",
//             name:"About us",
//             icon:<Store />
//         },
//         {
//             path:"/Settings",
//             name:"Settings",
//             icon:<Settings />
//         },
//         {
//             path:"/Home",
//             name:"Logout",
            
//             icon:<LogOut />
        
//         }
//     ]
//     return(
//         <>
//             {/* <About/> */}
//             <div className="contain">
//                 <div className="sidebar">
//                     <div className="top">
//                         <h1 className="logo"> DASHBOARD</h1>
//                          <div className="bars">
//                             <Menu/>
//                         </div>    
//                     </div>
//                     {
//                         menuItem.map((item,index)=>(
//                             <NavLink to={item.path} key={index} className="link" activeClassName="active">
//                             <div className="icon">{item.icon}</div>
//                             <div className="link_text">{item.name}</div>
//                         </NavLink>
//                         ))
//                     }
//                     {/* <div class="div">
//                         <button class="button">Logout</button>
//                     </div> */}
//                 </div>
//                 {/* <main>{}</main> */}
//             </div>
//                 <div>
//                     <Nav/>
//                 </div>
        
//             </>
//     )
// }
// export default Sidebar