import { useState } from 'react'

import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro'
import ChatWindow from './components/ChatWindow'
import NewChat from './components/NewChat'
import Login from './components/Login'
import Api from './Api'

const colors = {
  icons: '#B1B3B5'
}

export default () => {
  const [chatList, setChatList] = useState([])
  const [activeChat, setActiveChat] = useState({})
  const [user, setUser] = useState({
    id: 'tcqYBFPPeJgUuz6zxT4mG2wqdY92',
    name: 'Dhenyson Jhean',
    avatar: 'https://graph.facebook.com/4269726329785205/picture'
  })

  const [showNewChat, setShowNewChat] = useState(false)

  const handleLoginData = async (user) => {
    let newUser = {
      id: user.uid,
      name: user.displayName,
      avatar: user.photoURL
    }
    await Api.addUser(newUser)
    setUser(newUser)
  }

  if(user === null){
    return (<Login onReceiver={handleLoginData}/>)
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat show={showNewChat} setShow={setShowNewChat} user={user} chatlist={chatList}/>
        <header>
          <img className="header--avatar" src={user.avatar} alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: colors.icons }} />
            </div>
            <div onClick={() => setShowNewChat(true)} className="header--btn">
              <ChatIcon style={{ color: colors.icons }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: colors.icons }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: colors.icons }} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>

        <div className="chatlist">
          {chatList.map((item, key) => (
            <ChatListItem 
              key={key} 
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={()=>setActiveChat(chatList[key])}
              />
          ))}
        </div>

      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined
          ?<ChatWindow user={user}/>
          :<ChatIntro />
        }
      </div>
    </div>
  );
}
