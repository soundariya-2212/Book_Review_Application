import '../assets/Css/Register.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../Services/Api.js'; 
import React, { useState } from 'react';

function Add() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await addUser(formData);
            if (res.status === 201) {
                toast.success('Registration Successful!', {
                    position: 'bottom-right',
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
                navigate('/Login');
            }
        } catch (error) {
            toast.error('Registration failed', {
                position: 'bottom-right',
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            console.log(error);
        }
    };

    return (
        <>
            <div className='register-wrapper'>
                <div className='di-wrapper'>
                    <form className='container-wrapper' onSubmit={handleSubmit}>
                        <h1 className='m-wrapper'>Register</h1>
                        <input type='text' id='username' placeholder='Your name' className='mad-wrapper' required onChange={handleChange} />
                        <input type='password' id='password' placeholder='Password' className='mad-wrapper' required onChange={handleChange} />
                        <input type='password' id='confirmPassword' placeholder='Confirm Password' className='mad-wrapper' required />
                        <input type='email' id='email' placeholder='Email' className='mad-wrapper' required />
                        <input type='number' id='phone' placeholder='Phone' className='mad-wrapper' required />
                        <button type='submit' className='fir-wrapper'>
                            submit
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer
                position='bottom-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </>
    );
}

export default Add;
