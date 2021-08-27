import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css'
function HeaderOption({avatar, Icon, title, onClick}) { //props are the properties that we can use in our component 
    const user = useSelector(selectUser);
    return (    //We are destructuring the object that we are getting so that we dont have to write props.title
        <div onClick={onClick} className="headerOption">
             {Icon && <Icon className="headerOption__icon" />} {/*If we have icons only then we will display icon component */}
             {avatar && (<Avatar className="headerOption__avatar" src={user?.photoUrl}>
                {user?.email[0].toUpperCase()}
                </Avatar>
             )}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    );
}

export default HeaderOption
