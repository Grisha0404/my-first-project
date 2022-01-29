import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCounts: 11},
    {id: 2, message: "It's my first post!", likesCounts: 25}
]
let postsElement = posts.map( p =>  <Post message={p.message} likesCounts={p.likesCounts}/>);

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
                {postsElement}
            </div>
        </div>
    )
}


export default MyPosts;