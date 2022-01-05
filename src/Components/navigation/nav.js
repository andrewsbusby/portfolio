import './nav.css';
import ab from './ablogo.png';
import {BrowserRouter as Router, NavLink} from "react-router-dom";

function Navigator() {
    return (
        <><div className='nav'>
        <div className='ablogo'>
        
              <img src={ab} alt='Andrew Busby logo' />
                        
        </div>
        <Router>
            <NavLink exact to="/">About</NavLink>
            <NavLink exact to ="/">Projects</NavLink>
            <NavLink exact to="/">Contact</NavLink>
        </Router>
        </div>
        </>
    )
}



export default Navigator;