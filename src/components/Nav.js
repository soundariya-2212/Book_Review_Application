import {Link} from 'react-router-dom';
import '../assets/Css/Nav.css';
function Nav()
{
    return(
    <div>
        {/* <ul>
            <li>HOME</li>
        </ul> */}
        <div class="nav">
            <ul class="navlinks-wrapper">
            <li class="title">.ThE MiLLIoNs.</li> 
            <Link to ='/Home'><li class="ji">HOME</li></Link>
            <Link to='/Register'><li class="ji">REGISTER</li></Link>
            <Link to ='/Login' ><li class="ji">LOGIN</li></Link>
            <Link to='/Review'><li class="ji">REVIEW</li></Link>
            </ul>
        </div>
    </div>
    )
}
export default Nav;