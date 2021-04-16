import './NewChat.css'
import colors from '../colors'
import {useState} from 'react'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({user, chatlist, show, setShow}) => {
    const [list, setList] = useState([
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: "Cintia"},
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: "Morena"},
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: "Galega"},
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: "Amante"},
    ])

    const handleClose = () => {
        setShow(false)
    }

    return(
        <div className="newChat" style={{left: show?0:-415}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{ color: colors.icons }} />
                </div>
                <div className="newChat--headtitle">
                    New chat
                </div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key} >
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}