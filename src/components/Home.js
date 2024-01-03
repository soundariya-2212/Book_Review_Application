import image from '../assets/Image/read.jpg';
import '../assets/Css/Home.css';
import {Link} from 'react-router-dom'
function Home()
{
    return(
        <>
        <div>
            <img src={image} alt="hello" class="img"/>
        </div> 
            <div class="nets">
                <p>BiBlIoPhIlE</p>
            </div>   
            <div class="contentss">
                    <p class="paragraph">"The more that you read, the more things you will know. The more that you learn, the more places you’ll go...."</p>
            </div>
            <div class="button">
            <Link to='/Register'><button class="butt">EXPLORE</button></Link>
            </div>

        </>
        )
}
export default Home;