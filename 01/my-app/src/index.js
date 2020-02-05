import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {id: 1, message: 'Hi, how are you', likeCount: 10},
    {id: 2, message: 'It is my first post', likeCount: 20}
]

  let dialogsData = [
    {id: 1, name: 'Chris'},
    {id: 2, name: 'Dean'},
    {id: 3, name: 'Sam'},
    {id: 4, name: 'Cas'},
    {id: 5, name: 'Malloy'},
]

let messagesData = [
  {id: 1, message: 'Hey whats up nigga'},
  {id: 2, message: 'Yo dude'},
  {id: 3, message: 'Hey, che kak?'},
  {id: 4, message: 'I am crazy lazy'},
  {id: 5, message: 'Yes, sure'},
]

ReactDOM.render(<App postData = {postData} dialogsData = {dialogsData} messagesData = {messagesData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
