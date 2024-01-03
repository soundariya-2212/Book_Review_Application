import '../assets/Css/Register.css';
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
function Register()
{
    const navigate = useNavigate()
    function fun(event)
            {
                event.preventDefault();
                let y=document.getElementById("Password").value;
                let x=document.getElementById("ConfirmPassword").value;
           
                if(y===x)
                {
                        // alert("Password Matched");
                        toast.success(' Registration Successfull!', {
                        position: "bottom-right",
                        // autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                        setTimeout(()=>{
                                navigate('/Login')
                        },5000)
                }
                else
                {
                    // alert("Password Mismatched");
                    toast.error('Registration failed', {
                        position: "bottom-right",
                        // autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });

                }

        }

        return(
            <>
        
        <div className='register-wrapper'>
            <div class="di-wrapper">
        <form class="container-wrapper" onSubmit={fun}>
            <h1 class="m-wrapper">Registration Form</h1>
            <input type="text" name="" id="user" placeholder="Your name"class="mad-wrapper" required="required"/>
            <input type="password" name="" id="Password" placeholder="Password" class="mad-wrapper" required/>
            <input type="password" name="" id="ConfirmPassword" placeholder="Confirm Password" class="mad-wrapper" required/>
            <input type="email" name="" id="Email" placeholder="Email" class="mad-wrapper" required/>
            <input type="number" name="" id="number"placeholder="Phone" class="mad-wrapper" required/>
            {/* <!-- <input type="date" name="" id="date"placeholder="Date" class="mad"> --> */}
            <button type='submit' class="fir-wrapper">submit</button>
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

export default Register;