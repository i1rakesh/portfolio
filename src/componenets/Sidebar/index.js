import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import rLogo from '../../assets/images/r.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Slidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img className="sub-logo" src={rLogo} alt="logo-sub" />
        
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/rakesh" className="active1">
          <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
        </NavLink>
      </nav>
      <ul>
      <li className='lipehla'>
      <a  className='Linkdin' target="_blank" rel='noreferrer' href="./">
        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
      </a>
      </li>
      <li>
      <a className='Github' target="_blank" rel='noreferrer' href="./">
        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
      </a>
      </li>
      </ul>
    </div>
  )
}
export default Slidebar;
