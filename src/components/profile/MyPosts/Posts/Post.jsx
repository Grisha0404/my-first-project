import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'/>
                {props.message}
            </div>
            <div>
                <span>Likes</span> {props.likescounts}
            </div>
        </div>
    )
}


export default Post;