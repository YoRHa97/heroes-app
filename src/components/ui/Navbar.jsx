import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../constants/types';

export const Navbar = () => {
    const {user, dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch({type: types.logout});
        navigate('/login', {replace: true});
    };
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">          
            <Link to="/" className="navbar-brand" >
                Asociaciones
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink to="/marvel" className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}>
                        Marvel
                    </NavLink>
                    <NavLink to="/dc" className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}>
                        DC
                    </NavLink>
                    <NavLink to="/search" className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}>
                        Search
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-light">{user.name}</span>
                    <button onClick={handleLogout} className="nav-item nav-link btn" >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};
