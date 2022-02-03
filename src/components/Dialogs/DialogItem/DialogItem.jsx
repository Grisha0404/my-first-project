import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type dialogItemType ={
    id: number,
    ava: string,
    name: string
}

const DialogItem = (props: dialogItemType) => {
    let path = '/dialogs/' + props.id;
    return <div>
        <NavLink to={path} className = { navData => navData.isActive ? s.active : s.item }>
            {props.ava} {props.name}
        </NavLink>
    </div>
}

export default DialogItem;