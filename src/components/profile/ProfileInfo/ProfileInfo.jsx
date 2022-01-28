import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div>
        <div className={s.imgBlock}>
            <img src='https://sticker-na-auto.ru/images/product/l/4461bc1ae2.jpg'/>
        </div>
        <div className={s.avaBlock}>
            ava + discr
        </div>
    </div>
}


export default ProfileInfo;