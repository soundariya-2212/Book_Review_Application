import '../assets/Css/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
// import Dashboard from './components/Dashboard.js'
// import Sidebar from './Sidebar'
function Login() {
    const navigate = useNavigate()
    function fun(event)
            {
                event.preventDefault();
                let y=document.getElementById("Password").value;
                let x="1234";
           
                if(y===x)
                {
                        // alert("Password Matched");
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
                    // alert("Password Mismatched");
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
    
    return (
        <>
        {/* <Sidebar/> */}
            <div className='log-wrapper'>
                <div class="di-wrapper">
                    <form class="containe-wrapper" onSubmit={fun}>
                        <h1 class="m1-wrapper">LOGIN</h1>
                        <input type="text" name="" id="user" placeholder="Your name" class="mad1-wrapper" required />
                        <input type="password" name="" id="Password" placeholder="Password" class="mad1-wrapper" required/>
                        <div class="fun1-wrapper">
                        <button class="fir1-wrapper" type="submit">Login</button>
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