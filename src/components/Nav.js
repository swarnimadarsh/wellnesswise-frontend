import {Link} from 'react-router-dom';
import './navStyle.css';

function Nav()
{
    return(
        <div className="navbar sticky-top" style={{ borderRadius:"10px", backgroundColor:' #272343'}} >
            <Link to="/home" className='navbar-brand text-light ps-2 fa fa-fade m-2' style={{color:'#e3f6f5'}} >Wellness Wise <i class="fa fa-solid fa-person-walking fa-fade" size="2xl" style={{color:'#e3f6f5'}}></i></Link>
            <div className="nav">
                <Link to="/home" className='nav-link'style={{fontFamily:'cursive', color:'#e3f6f5'}}>Home</Link>
                <Link to="/doctor" className='nav-link'style={{fontFamily:'cursive', color:'#e3f6f5'}}>consult</Link>
                <Link to="/syllabus" className='nav-link'style={{fontFamily:'cursive', color:'#e3f6f5'}}>curriculum</Link>


                <div class="dropdown">
                    <div className=" dropdown-toggle nav-link"  role="button" data-bs-toggle="dropdown" aria-expanded="false"style={{fontFamily:'cursive',color:'#e3f6f5'}}>
                        Learnings
                    </div>

                    <ul class="dropdown-menu" style={{fontFamily:'cursive',color:'#e3f6f5'}}>
                        <li><Link className="dropdown-item" to="/learningvideos">Video</Link></li>
                        <li><Link className="dropdown-item" to="/quiz" >Quiz</Link></li>
                    </ul>
                </div>
                <Link to="/" className='nav-link'style={{fontFamily:'cursive', color:'#e3f6f5'}}>Login</Link>
                
            </div>
        </div>
    )
}
export default Nav;
