import EmojiPicker from 'emoji-picker-react'
import {useState} from 'react'

import './ChatWindow.css'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import colors from '../colors'

export default () => {

    const [emojiOpen, setEmojiOpen] = useState(false)

    const handleEmojiClick = () => {

    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">

                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                    <div className="chatWindow--name">Dhenyon Jhean</div>
                </div>

                <div className="chatWindow--headerbuttons">

                    <div className="chatWindow--btn">
                        <SearchIcon style={{ color: colors.icons }} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{ color: colors.icons }} />
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{ color: colors.icons }} />
                    </div>
                    
                </div>

            </div>
            <div className="chatWindow--body">

            </div>

            <div 
                className="chatWindow--emojiarea" 
                style={{height: emojiOpen ? '200px' : '0px'}}
            >
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar 
                    disableSkinTonePicker
                />
            </div>

            <div className="chatWindow--footer">
                <div className="chatWindow--pre">

                    <div 
                        className="chatWindow--btn" 
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen?40:0}}
                    >
                        <CloseIcon style={{ color: colors.icons }} />
                    </div>

                    <div className="chatWindow--btn" onClick={handleOpenEmoji}>
                        <InsertEmoticonIcon style={{ color: colors.icons }} />
                    </div>

                </div>

                <div className="chatWindow--inputarea">
                    <input 
                        className="chatWindow--input" 
                        type="text"
                        placeholder="Type a message"
                    />
                </div>
                <div className="chatWindow--pos">

                    <div className="chatWindow--btn">
                        <SendIcon style={{ color: colors.icons }} />
                    </div>

                </div>

            </div>
        </div>
    )
}