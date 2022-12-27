import './index.scss'
import profile from "../../assets/images/ProfileP.jpg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About me</h1>
        <p>
        To be a developer in a company where I can use my technical skills and
          potential in the organization’s projects. I am willing to explore a
          wide variety of opportunities that can help me learn new technologies
        </p>
        <p>
        Have a decent knowledge of Data structure and algorithms in C++ and have
          a problem-solving skill 
        </p>
        <p>
        Have good knownledge of fundamendal of computer science like Operating system,
         Computer Networks, Data base managment , compiler Design and OOP's etc
        </p>
      </div>
      <div className="card">
<div className="blob"></div>
  <span >
    <img src={profile} alt="" className="img"/>
  </span>
  <h2>Rakesh<br></br><span>kumar</span></h2>
  <div className='icons'>  
  <a  className='Linkdin' target="_blank" rel='noreferrer' href="./">
        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
      </a>
      <a className='Github' target="_blank" rel='noreferrer' href="./">
        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
      </a>
      <a className='Instagram' target="_blank" rel='noreferrer' href="./">
        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
      </a>
  </div>
</div>
    </div>
  )
}

export default About
