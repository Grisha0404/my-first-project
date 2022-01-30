import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>);
    let newPostElement = React.createRef();
    let addPosts = () => {
        let text = newPostElement.current.value;
        props.addPosts(text)
    }
    return (
        <div className={s.MyPost}>
            My post
            <div className={s.textBlock}>
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>
                <div className={s.button}>
                    <button onClick={addPosts}>Add post</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}


export default MyPosts;