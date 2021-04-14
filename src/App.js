import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

const colors = {
  icons: '#B1B3B5'
}

export default () => {
  return (
    <div className="app-window">
      <div className="sidebar">
        
        <header>
          <img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color: colors.icons}} />
            </div>
            <div className="header--btn">
              <ChatIcon style={{color: colors.icons}} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{color: colors.icons}} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{color: colors.icons}} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>

        <div className="chatList">
          ...
        </div>

      </div>
      <div className="contentarea">
        ...
      </div>
    </div>
  );
}
