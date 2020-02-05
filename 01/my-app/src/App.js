import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'; 
import News from './components/News/News'; 
import {Route, BrowserRouter} from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {

  

  return (
    <BrowserRouter>
    <div className = 'app-wrapper'>
      <Header />
      <Nav />
      <div className = "app-wrapper-content">
        <Route path = "/profile" render = { () => <Profile postData = {props.postData} />} />
        {/* <Route path = "/profile" component = {Profile} /> */}
        <Route path = "/dialogs" render = { () => <Dialogs dialogsData = {props.dialogsData} messagesData = {props.messagesData} />} />
        {/* <Route path = "/dialogs" component = {Dialogs} /> */}
        <Route path = "/news" component = {News} />
        <Route path = "/music" component = {Music} />
        <Route path = "/settings" component = {Settings} />
      </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
