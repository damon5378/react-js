import React from "react";
import s from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                <div className = {`${s.dialog} ${s.active}`}>
                    Chris
                </div>
                <div className = {s.dialog}>
                    Dean
                </div>
                <div className = {s.dialog}>
                    Sam
                </div>
                <div className = {s.dialog}>
                    Cas
                </div>
                <div className = {s.dialog}>
                    Malloy
                </div>
            </div>
            <div className = {s.messages}>
                <div className={s.message}>Hey what's up nigga</div>
                <div className={s.message}>Yo dude</div>
                <div className={s.message}>Hey, che kavo?</div>
            </div>
        </div>
    );
}

export default Dialogs;