import { Link } from 'react-router-dom'
import './index.scss'
import profile from '../../assets/images/cartoon-profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pdf from '../../assets/rakesh_kumar_resumeV3.pdf'
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br />
          I'm Rakesh
          <br />
          Software developer
        </h1>
        <h2>Software Developer</h2>
        <div className='buttons'>
        <Link to="/contact" className="flat-button">
          Contact me{' '}
        </Link>
        <a
          href={Pdf}
          download="Rakesh_Resume"
          target="_blank"
          rel="noreferrer"
        >
          <button style={{cursor:"pointer"}} className="flat-button">Download My Resume</button>
        </a>
        </div>
      </div>

      <div className="card">
        <div className="blob"></div>
        <span>
          <img src={profile} alt="" className="img" />
        </span>
        <h2>
          Rakesh<br></br>
          <span>kumar</span>
        </h2>
        <div className="icons">
          <a
            className="Linkdin"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/rakesh-kumar-3b59901a3/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
          <a
            className="Github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/i1rakesh"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
          <a
            className="Instagram"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/_i_rakesh/"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Home
