import '../assets/Css/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
import {useRef,useState} from 'react';
// import Dashboard from './components/Dashboard.js'
// import Sidebar from './Sidebar'
function Login() {
    const navigate = useNavigate()
    const username=useRef(null)
    const [errors,setErrors]=useState({
        username:'',  
    })
    const fun=(e)=>
            {
                e.preventDefault();
                const data={
                    username:username.current.value,
                }
                console.log(data.username.length)
                if(data.username.length===0)
                {
                    setErrors((prevErrors)=>({...prevErrors,username:'username is empty !'}));
                }
                else if(data.username.length<6)
                {
                    setErrors((prevErrors)=>({...prevErrors,username:'minimum 6 characters'}));
                }
                else
                {
                    setErrors((prevErrors)=>({...prevErrors,username:''}));
                    let y = parseInt(document.getElementById('Password').value, 10)
                    let x=1234;
                    if(data.username==="soundariya" && y===x)
                    {
                        console.log(data.username);
                        toast.success(' Login Successful!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                        setTimeout(()=>{
                            navigate('/Dashboard')
                    },5000)
                }
                else
                {
                   
                    toast.error('Login failed', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });

                }
                    }
                    username.current.value=''           
                }
    
    return (
        <>
        {/* <Sidebar/> */}
            <div className='log-wrapper'>
                <div className="di-wrapper">
                    <form className="containe-wrapper" onSubmit={fun}>
                        <h1 className="m1-wrapper">LOGIN</h1>
                        <input type="text" name="" id="user" placeholder="Username" ref={username} className="mad1-wrapper"/>
                        {
                        errors.username===''?
                        '':
                        <span className='error-comp'>
                            {errors.username}
                        </span>
                }
                        <input type="password" name="" id="Password" placeholder="Password" className="mad1-wrapper" required/>
                        <div className="fun1-wrapper">
                        <button className="fir1-wrapper" type="submit">Login</button>
                        </div >
                    </form>
                </div>
            </div>
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
        </>
    )
}
export default Login;