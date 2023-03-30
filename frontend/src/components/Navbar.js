import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import useAuthContext from '../hooks/useAuthContext'


const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <h3><Link to="/">Tasks Application</Link></h3>
            <nav className='navbar'>
                {!user && <div><Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
                </div>}
                {user && <div className='logged'><p className='useremail'>{user.email}</p>
                <Link onClick={handleClick} to="/login">Log out</Link></div>}
            </nav>
        </header>
    )
}


export default Navbar