import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div className={s.MyPost}>
            My post
            <div className={s.textBlock}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                <Post message='Hi, how are you?' likescounts='15'/>
            </div>
            <div>
                <Post message="It's my first post!" likescounts='20'/>
            </div>
        </div>
    )
}


export default MyPosts;