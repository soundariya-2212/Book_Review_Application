
import '../assets/Css/Register.css';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: '',
        password: '',
        email: '',
        phone: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.password === confirmPassword) {
            axios.post('http://localhost:8181/api/v1/user/save', data)
                .then(response => {
                    if (response.status === 201) {
                        console.log("Success"+response);
                        toast.success('Registration successful!', {
                            position: "bottom-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                        setTimeout(()=>{
                            navigate('/login');
                        },2000);
                        setData({ ...data, password: '' });
                        setConfirmPassword('');
                    } else {
                        toast.error('Registration failed', {
                            position: "bottom-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                        toast.error('Registration failed. Server error.', {
                            position: "bottom-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    } else if (error.request) {
                        console.log(error.request);
                        toast.error('Registration failed. No response from server.', {
                            position: "bottom-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    } else {
                        console.log('Error', error.message);
                        toast.error('Registration failed. Error setting up request.', {
                            position: "bottom-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                });
        } else {
            toast.error('Passwords do not match!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setData({ ...data, password: '' });
            setConfirmPassword('');
        }
    };

    return (
        <>
            <div className='register-wrapper'>
                <div className="di-wrapper">
                    <form className="container-wrapper" onSubmit={handleSubmit}>
                        <h1 className="m-wrapper">Register</h1>
                        <input type="text" id="username" placeholder="Username" className="mad-wrapper" required onChange={handleChange} />
                        <input type="password" id="password" placeholder="Password" className="mad-wrapper" required onChange={handleChange} />
                        <input type="password" id="confirmPassword" placeholder="Confirm Password" className="mad-wrapper" required value={confirmPassword} onChange={handleConfirmPasswordChange} />
                        <input type="email" id="email" placeholder="Email" className="mad-wrapper" required onChange={handleChange} />
                        <input type="number" id="phone" placeholder="Phone" className="mad-wrapper" required onChange={handleChange} />
                        <button type='submit' id="submit" className="fir-wrapper">Submit</button>
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
    );
}

export default Register;
