import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import Widgets from './Widgets';
import { auth } from './firebase';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //User is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      }else{
        //User is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* header */}
      <Header />
      {!user ? (<Login />) : (

      //{/* app-body */}
      <div className="app__body">
          {/* sidebar */}
          <Sidebar />
          {/* feed */}
            <Feed />
          {/* widgets */}
          <Widgets />
        </div>

      )}
      </div>
      );
}

      export default App;
