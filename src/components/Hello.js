import React from 'react'
//import logo1 from './logo1.png'
const Hello = () => {

    return(
        <div style={{backgroundImage:'logo1.png'}}>
            <label htmlFor="username">Username: </label><br/>
            <input id="username" type="text" placeholder="Type your username here" size="35"/><br/>
            <label htmlFor="password">Password: </label><br/>
            <input id="password" type="password" placeholder="Type your password here" size="35"/><br/>
            {/*<span>{`${progress}%`}</span>*/}
        </div>
        )
}
export default Hello

