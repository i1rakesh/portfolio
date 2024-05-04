import './index.scss'
import '../Contact/index.scss'
import profile from '../../assets/images/cartoon-profile.jpg'
import Twigal from '../../assets/images/Twigal.png'
import Docs from '../../assets/images/docs.png'
import mobileUI from '../../assets/images/mobile.png'
import Dashboard from '../../assets/images/dashboard.png'
import { Tilt } from 'react-tilt'
import {faGithub, faDribbble} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const Contact = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
  }

  return (
    <>
      <div className="project-page">
        <div className="text-zone">
          <h1>My Projects</h1>
          <div className="first-wrapper">
            <div className='upper-wrapper'>
            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <div className="project-card">
                <span>
                  <img src={Twigal} alt="" className="img" />
                </span>
                <h2>Twigal</h2>
                <h3>Twigal is a web chat app developed using React js and Firebase and tailwind CSS with some cool features like Chat Gpt and News letters</h3>
                <div className="links">
                  <a href="https://github.com/i1rakesh/twigal"><FontAwesomeIcon icon={faGithub} color="#fff" className='fa-lg' />Github </a>
                  <a href="https://twigaldemo.netlify.app/"><FontAwesomeIcon icon={faDribbble} color="#fff" size='fa-xl' className='fa-lg' />Link</a>
                </div>
              </div>
            </Tilt>

            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <div className="project-card">
                <span>
                  <img src={Docs} alt="" className="img" />
                </span>
                <h2>Google Docs Clone</h2>
                <h3>Created a Document editor inspired by google Docs using React Js and Tailwind CSS</h3>
                <div className="links">
                  <a href="https://github.com/i1rakesh/docs-clone"><FontAwesomeIcon icon={faGithub} color="#fff" className='fa-lg' />Github </a>
                  <a href="https://docsclone1234.netlify.app/"><FontAwesomeIcon icon={faDribbble} color="#fff" size='fa-xl' className='fa-lg' />Link</a>
                </div>
              </div>
            </Tilt>
            </div>
            <div className='lower-wrapper'>

            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <div className="project-card">
                <span>
                  <img src={mobileUI} alt="" className="img" />
                </span>
                <h2>Mobile UI</h2>
                <h3>Mobile UI for E-commerce Clothing Web App with product page and payment portal.</h3>
                <div className="links">
                  <a href="https://github.com/i1rakesh/mobile-design"><FontAwesomeIcon icon={faGithub} color="#fff" className='fa-lg' />Github </a>
                  <a href="https://resonant-squirrel-ae0ecb.netlify.app/"><FontAwesomeIcon icon={faDribbble} color="#fff" size='fa-xl' className='fa-lg' />Link</a>
                </div>
              </div>
            </Tilt>
 
            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <div className="project-card">
                <span>
                  <img src={Dashboard} alt="" className="img" />
                </span>
                <h2>Dashboard</h2>
                <h3>Dashboard for product analysis </h3>
                <div className="links">
                  <a href="https://github.com/i1rakesh/Dashboard"><FontAwesomeIcon icon={faGithub} color="#fff" className='fa-lg' />Github </a>
                  <a href="https://lustrous-cobbler-8fb5e9.netlify.app/"><FontAwesomeIcon icon={faDribbble} color="#fff" size='fa-xl' className='fa-lg' />Link</a>
                </div>
              </div>
            </Tilt>
            <div className='bottom-bar'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
