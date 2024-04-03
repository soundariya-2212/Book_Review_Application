import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserById, editUser } from '../Services/Api.js'; // Import getUserById and editUser functions

const EditUser = () => {
    const navigate = useNavigate();
    const { userId } = useParams(); // Assuming you have the user ID in the URL params

    const [userData, setUserData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        // Fetch user data by ID when component mounts
        const fetchUserData = async () => {
            try {
                const response = await getUserById(userId);
                setUserData(response.data); // Assuming response.data contains user data
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, [userId]); // Fetch data when userId changes

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await editUser(userId, userData);
            if (res.status === 200) {
                // User edit successful
                alert('User edit successful!');
                navigate(`/users/${userId}`); // Redirect to user details page after successful edit
            }
        } catch (error) {
            // User edit failed
            console.error('Error editing user:', error);
            alert('User edit failed');
        }
    };

    return (
        <>
            <div className='edit-user-wrapper'>
                <div className='edit-di-wrapper'>
                    <form className='edit-container-wrapper' onSubmit={handleSubmit}>
                        <h1 className='edit-m-wrapper'>Edit User</h1>
                        <input type='text' id='username' placeholder='Your name' className='edit-mad-wrapper' required value={userData.username} onChange={handleChange} />
                        <input type='password' id='password' placeholder='Password' className='edit-mad-wrapper' required value={userData.password} onChange={handleChange} />
                        <input type='password' id='confirmPassword' placeholder='Confirm Password' className='edit-mad-wrapper' required value={userData.confirmPassword} onChange={handleChange} />
                        <input type='email' id='email' placeholder='Email' className='edit-mad-wrapper' required value={userData.email} onChange={handleChange} />
                        <input type='text' id='phone' placeholder='Phone' className='edit-mad-wrapper' required value={userData.phone} onChange={handleChange} />
                        <button type='submit' className='edit-fir-wrapper'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditUser;
