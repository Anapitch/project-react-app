import React, { Component } from 'react'
//import picture from '../img/danger.jpg'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://www.flaticon.com/svg/vstatic/svg/1090/1090662.svg?token=exp=1614105795~hmac=4911423e1c3a6089bbda33545cefd39c" alt="pic" className="picture"/>
                <ReactTypingEffect text={['The most dangerous in the world']} speed={80} eraseDelay={200} className="typingeffect" />
            </div>
        );
    }
}

export default Home;