import './nav.css';
import ab from './ablogo.png'

function Navigator() {
    return (
        <><div className='nav'>
        <div className='ablogo'>
              <img src={ab} alt='Andrew Busby logo' />
        </div>
            <nav>About</nav>
            <nav>Projects</nav>
            <nav>Contact</nav>
        </div>
        </>
    )
}



export default Navigator;