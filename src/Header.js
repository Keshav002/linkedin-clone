import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import { BusinessCenter, Chat, Notifications } from '@material-ui/icons';
import Home from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();

    };

    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                <div className="header__search">
                    {/* search-icon */}
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={Home} title="Home" />
                <HeaderOption Icon={SupervisorAccount} title="My Network" />
                <HeaderOption Icon={BusinessCenter} title="Jobs" />
                <HeaderOption Icon={Chat} title="Messaging" />
                <HeaderOption Icon={Notifications} title="Notifications" />
                <HeaderOption  avatar={true} title="me" 
                    onClick={logoutOfApp}
                />
            </div>
        </div>

    )
}

export default Header
