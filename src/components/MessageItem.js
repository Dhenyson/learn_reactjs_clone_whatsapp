import './MessageItem.css'

export default ({data, user}) => {
    return (
        <div 
            className="messageLine"
            style={{justifyContent: user.id === data.author ? 'flex-end':'flex-start'}}
        >
            <div 
                className="messageItem"
                style={{backgroundColor: user.id === data.author ? '#056162':'#262d31'}}
            >
                <div className="messageText">{data.body}</div>
                <div className="messageDate">{data.date}</div>
            </div>
        </div>
    )
}