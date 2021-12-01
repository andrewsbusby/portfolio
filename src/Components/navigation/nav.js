import './nav.css';
import ab from './ablogo.png'

function Navigator() {
    return (
        <><div className='nav'>
            <nav>About</nav>
            <nav>Projects</nav>
            <nav>Contact</nav>
        </div>
        <div>
              <img src={ab} className='ablogo' alt='Andrew Busby logo' />
        </div></>
    )
}



export default Navigator;