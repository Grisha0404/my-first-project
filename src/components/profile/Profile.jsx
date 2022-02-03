import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts, {MyPostsPropsType} from "./MyPosts/MyPosts";
import {updateNewPostText} from "../../redux/state";

 type profilePropsType = {
    profilePage:
        {
            newPostText: string,
            posts: string
        },
    addPosts: string,
    updateNewPostText: string,

}

const Profile = (props: profilePropsType) => {
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