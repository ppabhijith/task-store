import logo from '../images/crm-logo.jpeg'
import { useNavigate } from 'react-router-dom';
const Nav = () => {
    const navigate = useNavigate()
    return (
        <nav className='nav'>
            <div className='nav--logo'>
                <img src={logo} alt="crm logo" />
            </div>
            <div className='nav--controls'>
                <div className='nav--item' onClick={() => navigate('/ticket')}>&#x2629;</div>
                <div className='nav--item' onClick={() => navigate('/')} >&#x26EA;</div>
            </div>
        </nav >
    )
}
export default Nav;