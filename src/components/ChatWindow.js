import './ChatWindow.css'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import colors from '../colors'

export default () => {
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
            <div className="chatWindow--footer">

            </div>
        </div>
    )
}