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
import {RootStateType} from './redux/state';

type AppPropsType = {
    state: RootStateType
    addPost: (postValue: string)=> void
    addMessage: (messageText: string) => void
    messageForNewPost: (inputValue: string)=> void
    messageForNewDialog: (inputValue: string)=> void
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route
                    path='/profile'
                    render={() => <Profile state={props.state}
                                           addPost={props.addPost}
                                           messageForNewPost={props.messageForNewPost}
                    />}
                />
                <Route path='/dialogs' render={() => <Dialogs state={props.state}
                                                              addMessage={props.addMessage}
                                                              messageForNewDialog={props.messageForNewDialog}
                                                              newDialogText={props.state.dialogsPage.newMessageText}
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
