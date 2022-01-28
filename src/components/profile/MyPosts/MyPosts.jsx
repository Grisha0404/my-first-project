import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                New Post
            </div>
            <div>
                <Post message='Hi, how are you?' counts='15'/>
            </div>
            <div>
                <Post message="It's my first post!" counts='20'/>
            </div>
        </div>
    )
}


export default MyPosts;