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
import {StoreType} from './redux/state';

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
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}
                />
                <Route
                    path='/dialogs'
                    render={() => <Dialogs
                        state={state}
                        dispatch={props.store.dispatch.bind(props.store)}
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
