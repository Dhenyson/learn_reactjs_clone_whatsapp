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
import Api from '../Api'

import colors from '../colors'
import MessageItem from './MessageItem'
import { IsoRounded } from '@material-ui/icons';

export default ({user, data}) => {

    const body = useRef();

    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')
    const [list, setList] = useState([])

    useEffect(()=>{
        let unsub = Api.onChatContent(data.chatId, setList)
        return unsub
    }, [data.chatId])

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
        console.log(list)    }

    const handleSendClick = () => {
        if(text !== ''){
            Api.sendMessage(data, user.id, 'text', text)
            setText('')
            setEmojiOpen(false)
        }
    }

    const handleInputKeyUp = (e) => {
        if(e.keyCode === 13){
            handleSendClick()
        }
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">

                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src={data.image} alt="" />
                    <div className="chatWindow--name">{data.title}</div>
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
                        onKeyUp={handleInputKeyUp}
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