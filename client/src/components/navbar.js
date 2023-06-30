function NavBar() {
    return(
        <nav>
           
            <ul className='navbar-links'>
            <li>
          <button onClick={() => handleLinkClick('home')} className={activePage === 'home' ? 'active' : ''}>
            Home
          </button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('topics')} className={activePage === 'topics' ? 'active' : ''}>
            Topics
          </button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('login')} className={activePage === '' ? 'active' : ''}>
            Login
          </button>
        </li>
        </ul>      
        </nav>
    )
};

export default  NavBar;

