import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../Services/Api.js'; // Import addUser function

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
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
                // Registration successful
                alert('Registration Successful!');
                navigate('/Login'); // Redirect to login page after successful registration
            }
        } catch (error) {
            // Registration failed
            console.log(error);
            alert('Registration failed');
        }
    };

    return (
        <>
            <div className='register-wrapper'>
                <div class='di-wrapper'>
                    <form class='container-wrapper' onSubmit={handleSubmit}>
                        <h1 class='m-wrapper'>Register</h1>
                        <input type='text' id='username' placeholder='Your name' class='mad-wrapper' required onChange={handleChange} />
                        <input type='password' id='password' placeholder='Password' class='mad-wrapper' required onChange={handleChange} />
                        <button type='submit' class='fir-wrapper'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
