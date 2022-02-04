import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPosts()
    }
    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostText(newText);
    }
    return (
        <div className={s.myPost}>
            My post
            <div className={s.textBlock}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div className={s.button}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}


export default MyPosts;