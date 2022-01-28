import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import ProfileInfo from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='App-wrapper'>
                <Header/>
                <Nav/>
                <div className='App-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<ProfileInfo/>}/>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
