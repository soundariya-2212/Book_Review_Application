import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../assets/Css/Login.css'
const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/user/login', formData);
            console.log(response.data);
            toast.success('Login successful!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            const userDataResponse = await axios.get('http://localhost:8080/api/v1/user/data'); // Replace with your actual endpoint to fetch user data
            console.log(userDataResponse.data); // Assuming userDataResponse contains user data
    
            navigate('/dashboard'); // Redirect to dashboard after successful login
        } catch (error) {
            console.error(error);
            // alert('error');
            toast.error('Invalid username or password', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }
            );
        }
    };

    return (
        <>
            <div className='log-wrapper'>
                <div className="di-wrapper">
                    <form className="containe-wrapper" onSubmit={handleSubmit}>
                        <h1 className="m1-wrapper">LOGIN</h1>
                        <input type="text" name="username" placeholder="Username" className="mad1-wrapper" required onChange={handleChange} />
                        <input type="password" name="password" placeholder="Password" className="mad1-wrapper" required onChange={handleChange} />
                        <div className="fun1-wrapper">
                            <button className="fir1-wrapper" type="submit">Login</button>
                        </div>
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
