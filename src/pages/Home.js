/* eslint-disable */
import React from 'react';

import logo from './image.jpg';
import logo2 from './image2.jpg';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => {
    const main = {
        paddingLeft: '25%',
        paddingTop: '4%',
        width: '100%',
        maxWidth: '935px',
    }

    const leftBox = {
        float:'left',
        paddingRight:'5%',
    }

    const leftImg = {
        height: '550px',
    }

    const rightBox = {
        float:'left',
        width:'350px',
        paddingRight:'20%',
    }

    const loginBox = {
        padding: '10px 0',
        border: '1px solid #dbdbdb',
        backgroundColor: 'white',
        maxWidth: '348px',
        height: '355px',
    }

    const loginBoxImg = {
        width: '200px',
        padding: '20px 0 20px 0',
    }

    const loginBoxForm = {
        height: '100px',
    }

    const loginBoxFormDiv1 = {
        padding: '0 0 10px 0',
    }

    const loginBoxFormInput = {
        backgroundColor: '#fafafa',
        width: '250px',
        height: '40px',
        borderRadius: '3px',
        border: '1px solid #dbdbdb',
    }

    const loginBoxFormDiv2 = {
        padding: '10px 0 20px 0',
    }

    const loginBoxFormButton = {
        backgroundColor: '#0095f6',
        color:'white',
        border: '1px solid transparent',
        borderRadius: '4px',
        width: '258px',
        height: '35px',
        fontSize: '1em',
        fontWeight: 'bold',
    }

    const loginBoxLink = {
        color: '#00376b',
        fontSize: '0.8em',
    }

    const registerBox = {
        marginTop:'5%',
        border: '1px solid #dbdbdb',
        backgroundColor: 'white',
        height: '65px',
    }

    const registerBoxP ={
        paddingTop: '1%',
    }

    const registerBoxLink = {
        color: '#0095f6',
        fontWeight: 'bold',
    }

    return(
        <div style={main}>
        <div style={leftBox}>
          <img style={leftImg} src={logo}></img>
        </div>
        <div style={rightBox}>
          <div style={loginBox}>
            <img style={loginBoxImg} src={logo2}></img>
            <form style={loginBoxForm}>
              <div style={loginBoxFormDiv1}>
                <input style={loginBoxFormInput} placeholder="이메일"></input>
              </div>
              <div style={loginBoxFormDiv1}>
                <input style={loginBoxFormInput} placeholder="비밀번호"></input>
              </div>
              <div style={loginBoxFormDiv2}>
                <button style={loginBoxFormButton}>로그인</button>
              </div>
              <Link style={loginBoxLink} to="/passwordReset">비밀번호를 잊으셨나요?</Link>
            </form>
          </div>
          <div style={registerBox}>
            <p style={registerBoxP}>계정이 없으신가요? <Link style={registerBoxLink} to="/register">가입하기</Link></p>
          </div>
        </div>
      </div>
    )
}

export default Home;