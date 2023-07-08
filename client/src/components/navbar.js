import React from 'react'
import { Link } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

function NavBar() {
  return (
    <Breadcrumb separator='-' color='#973e20'>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to="/">Homepage</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to="/dashboard">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Breadcrumb>
  )
}

export default NavBar;

    // <nav>

    //   <ul className='navbar-links'>
    //     <li>
    //       <button onClick={() => handleLinkClick('home')} className={activePage === 'home' ? 'active' : ''}>
    //         Home
    //       </button>
    //     </li>
    //     <li>
    //       <button onClick={() => handleLinkClick('topics')} className={activePage === 'topics' ? 'active' : ''}>
    //         Topics
    //       </button>
    //     </li>
    //     <li>
    //       <button onClick={() => handleLinkClick('login')} className={activePage === '' ? 'active' : ''}>
    //         Login
    //       </button>
    //     </li>
    //   </ul>
    // </nav>