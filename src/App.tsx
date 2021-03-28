import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Profile} from "./Components/Profile/Profile";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import  {StoreType} from './redux/state';

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route
                    path='/profile'
                    render={() => <Profile
                        state={state}
                        addPost={props.store.addPost.bind(props.store)}
                        messageForNewPost={props.store.messageForNewPost.bind(props.store)}
                    />}
                />
                <Route
                    path='/dialogs'
                    render={() => <Dialogs
                        state={state}
                        addMessage={props.store.addMessage.bind(props.store)}
                        messageForNewDialog={props.store.messageForNewDialog.bind(props.store)}
                        newDialogText={state.dialogsPage.newMessageText}
                    />}
                />
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
