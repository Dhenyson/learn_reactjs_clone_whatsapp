import './Login.css'
import Api from '../Api'

export default ({onReceiver}) => {

    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup()
        if(result){
            onReceiver(result.user)
        } else {
            alert('Error!')
        }
    }

    return (
        <div className="login">
            <button onClick={handleFacebookLogin}>Login</button>
        </div>
    )
}