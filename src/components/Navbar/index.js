import {Link} from 'react-router-dom'

import './index.css'
const Navbar=props=>{
    return (
        <nav className="nav-bar">
            <div className="nav-content">
                <div className="nav-bar-mobile-logo-container">
                    <Link to="/">
                        <h1 className="company-name">YellowSense</h1>
                    
                    </Link>
                    <Link to="/">
                    <h1 className="home">Home</h1>
                    </Link>
                </div>
                <div className="nav-bar-large-container">
                    <h1 className="company-name">YellowSense</h1>
                    <ul className="nav-menu">
                        
                        <li className="nav-menu-item">
                            <Link to="/" className="nav-link">
                            Home
                            </Link>
                        </li>
                        
                        
                        <li className="nav-menu-item">
                            <Link to="/jobs" className="nav-link">
                            Jobs
                            </Link>  
                        </li>
                        <li className="nav-menu-item">
                            <Link to="bookmarks" className="nav-link">
                            BookMarks
                            </Link> 
                        </li>

                    </ul>

                </div>
            </div>
            <div className="nav-menu-mobile">
                <ul className="nav-menu-list-mobile">
                    <li className="nav-menu-item-mobile">
                    <Link to="/jobs" className="nav-link">
                    <img
                        src="https://e7.pngegg.com/pngimages/539/285/png-clipart-job-hunting-computer-icons-icon-design-suitcase-drawing-rectangle-employment-thumbnail.png"
                        alt="nav Job"
                        className="nav-bar-image"
                    />
                    </Link>
                    
                    </li>
                    <li className="nav-menu-item-mobile">
                    <Link to="/bookmarks" className="nav-link">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQAwjAtOjU3eAEsg5sUwobjF4njKnZhiHfw&s"
                        alt="nav Job"
                        className="nav-bar-image"
                    />
                    </Link>
                    
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar