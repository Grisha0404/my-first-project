import React from 'react';
import s from './Profile.module.css'
import Post from "./MyPosts/Posts/Post";
import MyPosts from "./MyPosts/MyPosts";
const Profile = ()=> {
    return <div className={s.content}>
        <div>
            <img src='https://s0.rbk.ru/v6_top_pics/media/img/1/16/755904759776161.jpg'/>
        </div>
        <div>
            ava + discr
        </div>
        <div>
            <MyPosts/>
        </div>
        </div>
}


export default Profile;