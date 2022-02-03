import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Profile from "./components/profile/Profile";
import {updateNewPostText} from "./redux/state";
import {dialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {messageType} from "./components/Dialogs/Massege/Message";

type appPropsType = {
    state:
        {
            profilePage: string,
            messagesPage:
                {
                    dialogs: Array<dialogItemType>,
                    messages: Array<messageType>
                }
        },
    addPosts: string,
    updateNewPostText: string,
    addMessage: string
}

const App = (props: appPropsType) => {
    return (
        <BrowserRouter>
            <div className='App-wrapper'>
                <Header/>
                <Nav/>
                <div className='App-wrapper-content'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile profilePage={props.state.profilePage} addPosts={props.addPosts}
                                                 updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path='/dialogs' element={<Dialogs dialogs={props.state.messagesPage.dialogs}
                                                                 messages={props.state.messagesPage.messages}
                                                                 addMessage={props.addMessage}/>}/>
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
