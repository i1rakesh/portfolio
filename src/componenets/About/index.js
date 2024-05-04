import './index.scss'
import profile from '../../assets/images/cartoon-profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About me</h1>
        <p>
          I've excelled in various aspects of software engineering, contributing
          significantly to the development of robust and scalable systems.
          Leveraging Node.js and PostgreSQL, I've crafted backend solutions
          prioritizing reliability and performance. My commitment to security is
          evident through the implementation of JWT token authentication,
          enhancing application security. On the frontend, I've demonstrated
          mastery in React.js, Redux/Redux Toolkit, and Material UI, enabling
          the creation of responsive and visually appealing user interfaces.
        </p>
        <div className="education-list">
          <ul>
            <h2>Experience</h2>
            <div className="edu-data">
              <li>
                <div className="edu-data">
                  <p>
                    {' '}
                    Software Engineer
                    <br />{' '}
                    <span>
                      Echno Technologies Pvt Ltd, Bangalore, Karnataka
                    </span>
                  </p>
                  <p>Oct 2023 - Present</p>
                </div>
              </li>
            </div>
            <li>
              {' '}
              <div className="edu-data">
                <p>
                  {' '}
                  React Js Developer Trainee
                  <br />{' '}
                  <span>Echno Technologies Pvt Ltd, Bangalore, Karnataka</span>
                </p>
                <p>July 2023 - Oct 2023</p>
              </div>
            </li>
            <h2>Education</h2>
            <li>
              {' '}
              <div className="edu-data">
                <p>
                  {' '}
                  B.Tech Computer Science Engineering
                  <br /> <span>SRM University</span>
                </p>
                <p>2019 - 2023</p>
              </div>
            </li>
          </ul>
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

export default About
