import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className = {`${s.dialog} ${s.active}`}>
                <NavLink to = {path}>{props.name}</NavLink>
                </div>
    );
}

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    );
}


const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Chris'},
        {id: 2, name: 'Dean'},
        {id: 3, name: 'Sam'},
        {id: 4, name: 'Cas'},
        {id: 5, name: 'Malloy'},
    ]

    let dialogsElements = 
        dialogsData.map( (dialog) =>  <DialogItem name = {dialog.name} id={dialog.id} />);

    let messagesData = [
        {id: 1, message: 'Hey whats up nigga'},
        {id: 2, message: 'Yo dude'},
        {id: 3, message: 'Hey, che kavo?'},
        {id: 4, message: 'I am crazy lazy'},
        {id: 5, message: 'Yes, sure'},
    ]

    let messagesElements = 
        messagesData.map( (message) =>  <MessageItem text = {message.message} />)

    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className = {s.messages}>

                {messagesElements}

            </div>
        </div>
    );
}

export default Dialogs;