import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import React, { useEffect, useState } from 'react';
import InputOption from './InputOption';
import './Feed.css';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);

    const[posts, setPosts] = useState([]);
    const[input, setInput] = useState("");

    useEffect(() => {
        db.collection('posts')
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => //onSnapshot is a event which captures the snapshot of the doc whenever there is a change . 
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        ))
    }, []);

    // Whenever there is a clickable fn there is an event assosiated with it
    const sendPost = (e) => {
        e.preventDefault(); //For stopping page from reloading

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
            </div>
            </div>

            {/* Posts */}
            <FlipMove>
            {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            </FlipMove>
        </div>
    );
}

export default Feed
