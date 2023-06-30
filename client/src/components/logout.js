const handleLogout = async () => {
    try {
        await fetch('/logout', {
            method: 'POST',
            //need to add information from req based on model and how JWT works. I don't know what to add here at this time because we don't have JWT set up. Something else will need to go here to specify which user to logout through the logout route.
        });
        //this will redirect to the login route after logout is performed. Opportunity for other logic to be added here if needed.
        window.location.href = '/login';
    } catch {
        console.log('error logging out');
    }
};




//logout component here
function Logout() {
    return (
        <button classname='logout-button' onClick={handleLogout}>
            Logout
        </button>
    )
};

export default Logout;