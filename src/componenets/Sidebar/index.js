import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import rLogo from '../../assets/images/r.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser, faStar } from '@fortawesome/free-solid-svg-icons'

const Slidebar = () => {
  return (
    <div className='nav-wrapper'>
    <div className="nav-bar">
      {/* <Link className="logo" to="/">
        <img className="sub-logo" src={rLogo} alt="logo-sub" />
        
      </Link> */}
      <nav>
        <NavLink exact="true" activeclassname="active" to="/" className="active1">
          <FontAwesomeIcon icon={faHome} color="#4d4d4d" className='fa-lg' />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4d" className='fa-lg' />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" className='fa-lg' />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="project-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faStar} color="#4d4d4d" className='fa-lg' />
        </NavLink>
      </nav>
      
      <ul>
      </ul>
    </div>
    </div>
  )
}
export default Slidebar;
