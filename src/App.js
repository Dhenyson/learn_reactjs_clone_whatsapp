import { useState } from 'react'

import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro'
import ChatWindow from './components/ChatWindow'

const colors = {
  icons: '#B1B3B5'
}

export default () => {
  const [chatList, setChatList] = useState([
    {chatId: 1, title: '.', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title: 'Cíntia Carolayne - Namorada', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title: 'Michel-pizzaria', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 4, title: 'Fulano de tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'}
  ])
  const [activeChat, setActiveChat] = useState({})

  return (
    <div className="app-window">
      <div className="sidebar">

        <header>
          <img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: colors.icons }} />
            </div>
            <div className="header--btn">
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
              active={activeChat.chatId === chatList[key].chatId}
              onClick={()=>setActiveChat(chatList[key])}
              />
          ))}
        </div>

      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined
          ?<ChatWindow />
          :<ChatIntro />
        }
      </div>
    </div>
  );
}
