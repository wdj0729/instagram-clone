/* eslint-disable */
import React, { useState } from 'react';
import logo from './image.jpg';
import logo2 from './image2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="leftBox">
          <img src={logo}></img>
        </div>
        <div className="rightBox">
          <div className="loginBox">
            <img src={logo2}></img><br></br><br></br>
            <form>
              <input placeholder="이메일"></input><br></br><br></br>
              <input placeholder="비밀번호"></input>
            </form><br></br>
            <button>로그인</button><br></br><br></br>
            <a href="/">비밀번호를 잊으셨나요?</a>
          </div>
          <br></br>
          <div className="signupBox">
            <p>계정이 없으신가요? <a href="/">가입하기</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
