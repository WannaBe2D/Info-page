import React from 'react';
import './index.css';


function UserInfo(){
    const nickname = 'Wanna Be'
    
    return(
        <div className="UserInfo">
            <p className="nickname">
                {nickname}
            </p>
            <p className="discription">
                This is quick website built in React💙<br/>
                All my official links are here!🙌
            </p>
        </div>
    )
}


export default UserInfo;