import EmojiPicker from 'emoji-picker-react'
import {useState, useEffect, useRef} from 'react'

import './ChatWindow.css'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import colors from '../colors'
import MessageItem from './MessageItem'

export default ({user}) => {

    const body = useRef();

    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')
    const [list, setList] = useState([
        {author: 123, body:'Testando mensagem', date:"18:30"},
        {author: 1234, body:'eu', date:"18:45"},
        {author: 1234, body:'aqui', date:"18:48"},
        {author: 123, body:'Testando mensagem de novo', date:"18:52"},
        {author: 123, body:'Testando mensagem', date:"18:30"},
        {author: 1234, body:'eu', date:"18:45"},
        {author: 1234, body:'aqui', date:"18:48"},
        {author: 123, body:'Testando mensagem de novo', date:"18:52"},
        {author: 123, body:'Testando mensagem', date:"18:30"},
        {author: 1234, body:'eu', date:"18:45"},
        {author: 1234, body:'aqui', date:"18:48"},
        {author: 123, body:'Testando mensagem de novo', date:"18:52"},
        {author: 123, body:'Testando mensagem', date:"18:30"},
        {author: 1234, body:'eu', date:"18:45"},
        {author: 1234, body:'aqui', date:"18:48"},
        {author: 123, body:'Testando mensagem de novo', date:"18:52"},
        {author: 123, body:'Testando mensagem', date:"18:30"},
        {author: 1234, body:'eu', date:"18:45"},
        {author: 1234, body:'aqui', date:"18:48"},
        {author: 123, body:'Testando mensagem de novo', date:"18:52"},
        {author: 123, body:'Testando mensagem', date:"18:30"},
        {author: 1234, body:'eu', date:"18:45"},
        {author: 1234, body:'aqui', date:"18:48"},
        {author: 123, body:'Testando mensagem de novo', date:"18:52"},
    ])

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    },[list])

    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    const handleMicClick = () => {

    }

    const handleSendClick = () => {

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

            <div ref={body} className="chatWindow--body">
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
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
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow--pos">

                    {text === ''
                        ?<div className="chatWindow--btn">
                            <MicIcon onClick={handleMicClick} style={{ color: colors.icons }} />
                        </div>
                        :<div onClick={handleSendClick} className="chatWindow--btn">
                            <SendIcon style={{ color: colors.icons }} />
                        </div>
                    }

                </div>

            </div>
        </div>
    )
}