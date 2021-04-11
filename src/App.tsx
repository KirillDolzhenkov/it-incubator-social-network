import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from './сomponents/Header/Header';
import {Navbar} from './сomponents/Navbar/Navbar';
import {Profile} from "./сomponents/Profile/Profile";
import {News} from "./сomponents/News/News";
import {Music} from "./сomponents/Music/Music";
import {Settings} from "./сomponents/Settings/Settings";
import {DialogsContainer} from './сomponents/Dialogs/DialogsContainer'

type AppPropsType = {

}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export {
    App
}

