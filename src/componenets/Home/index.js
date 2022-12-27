import { Link } from 'react-router-dom'
import Logo from '../Logo'
import './index.scss'
const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br />
          I'm
          
          Rakesh
          <br />
          Web developer
        </h1>
        <h2>Front-End Developer/ C++ Programmer/ UI designer</h2>
        <Link to="/contact" className="flat-button">
          Contact me{' '}
        </Link>
      </div>
      <Logo/>
    </div>
  )
}

export default Home
