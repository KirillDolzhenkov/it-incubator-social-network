import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import { Dialogs } from './Components/Dialogs/Dialogs';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import {Profile} from "./Components/Profile/Profile";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import { RootStateType } from './redux/state';

type AppPropsType = {
    state: RootStateType
}

const App: React.FC<AppPropsType> = (props) => {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                  <Route path='/profile' render={()=><Profile state={props.state}/>}/>
                  <Route path='/dialogs' render={()=><Dialogs state={props.state}/>}/>
                  <Route path='/news' render={()=><News/>}/>
                  <Route path='/music' render={()=><Music/>}/>
                  <Route path='/settings' render={()=><Settings/>}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
