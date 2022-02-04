import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return <div>
        <div>
            <ProfileInfo/>
        </div>
        <div>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPosts={props.addPosts}/>
        </div>
    </div>
}


export default Profile;