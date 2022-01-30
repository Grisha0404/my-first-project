import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>);
    return (
        <div className={s.MyPost}>
            My post
            <div className={s.textBlock}>
                <div>
                    <textarea> </textarea>
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