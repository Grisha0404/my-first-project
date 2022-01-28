import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'/>
            {props.message}
            <div>
                <span>Like {props.counts}</span>
            </div>
        </div>
    )
}


export default Post;