import React from "react";
import s from './../Dialogs.module.css';



const Messages = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    );
}

export default Messages;