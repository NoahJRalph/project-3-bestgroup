import React from 'react';
import { useNavigate } from 'react-router-dom';



// Logout component here
const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await fetch('/logout', {
                method: 'POST',
                // Need to add information from req based on model and how JWT works. I don't know what to add here at this time because we don't have JWT set up. Something else will need to go here to specify which user to logout through the logout route.
            });

            navigate('/'); // Redirect to the default path after logout
        } catch {
            console.log('error logging out');
        }
    };
    return (
        <button className='logout-button' onClick={handleLogout}>
            Logout
        </button>
    );
}

export default Logout;
