/* eslint-disable */
import React, {useState} from 'react';
import logo2 from './image2.jpg';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const main = {
        paddingLeft: '38%',
        paddingTop: '2.2%',
        width: '100%',
        height: '600px',
    };

    const registerBox = {
        padding: '10px 0 0 0',
        border: '1px solid #dbdbdb',
        backgroundColor: 'white',
        maxWidth: '348px',
        height: '518px',
    };

    const registerBoxImg = {
        width: '200px',
        padding: '20px 0 0 0',
    };
    
    const registerBoxP = {
        margin: '0 40px 10px',
        color: '#8e8e8e',
        fontSize: '17px',
        fontWeight: '600',
    };

    const registerBoxForm = {
        height: '370px',
    };

    const registerBoxFormDiv1 = {
        padding: '0 0 10px 0',
    };

    const registerBoxFormInput = {
        backgroundColor: '#fafafa',
        width: '250px',
        height: '40px',
        borderRadius: '3px',
        border: '1px solid #dbdbdb',
    };

    const registerBoxFormDiv2 = {
        padding: '10px 0 20px 0',
    };

    const registerBoxFormButton = {
        backgroundColor: '#0095f6',
        color:'white',
        border: '1px solid transparent',
        borderRadius: '4px',
        width: '258px',
        height: '35px',
        fontSize: '1em',
        fontWeight: 'bold',
    };

    const registerBoxFormP = {
        color: '#8e8e8e',
        fontSize: '12px',
        fontWeight: '600',
        margin : '10px 40px',
    };

    const loginBox = {
      marginTop:'5%',
      border: '1px solid #dbdbdb',
      backgroundColor: 'white',
      height: '65px',
    };

    const loginBoxP ={
        paddingTop: '1%',
    };

    const loginBoxLink = {
      color: '#0095f6',
    };

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [nickname,setNickname] = useState('');

    const onchangeEmail = (e) => {
      setEmail(e.target.value);
    };

    const onchangePassword = (e) => {
      setPassword(e.target.value);
    };

    const onchangeNickname = (e) => {
      setNickname(e.target.value);
    };

    const onchangeName = (e) => {
      setName(e.target.value);
    };

    const onSubmit = (e) =>{
      e.preventDefault();

      console.log({email, password, nickname, name});

      axios.post('http://110.47.129.156:8080/api/signup', {
        email: email,
        password: password,
        nickname: nickname,
        name: name
      })
      .then(function(response){
        console.log(response);
      }).catch(function(error){
        console.log(error);
      }).then(function(){
        console.log("SIGNUP");
      });
    };

    return(
      <div style={main}>
          <div style={registerBox}>
            <img style={registerBoxImg} src={logo2}></img>
            <p style={registerBoxP}>친구들의 사진과 동영상을 보려면 가입하세요.</p>
            <form style={registerBoxForm} onSubmit={onSubmit}>
              <div style={registerBoxFormDiv1}>
                <input style={registerBoxFormInput} placeholder="이메일 주소" required onChange={onchangeEmail}></input>
              </div>
              <div style={registerBoxFormDiv1}>
                <input style={registerBoxFormInput} placeholder="성명" required onChange={onchangeName}></input>
              </div>
              <div style={registerBoxFormDiv1}>
                <input style={registerBoxFormInput} placeholder="사용자 이름" required onChange={onchangeNickname}></input>
              </div>
              <div style={registerBoxFormDiv1}>
                <input style={registerBoxFormInput} placeholder="비밀번호" required onChange={onchangePassword}></input>
              </div>
              <div style={registerBoxFormDiv2}>
                <button style={registerBoxFormButton}>가입</button>
              </div>
              <p style={registerBoxFormP}>가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</p>
            </form>
            <div style={loginBox}>
                <p style={loginBoxP}>계정이 있으신가요? <Link style={loginBoxLink} to="/">로그인</Link></p>
            </div>
          </div>
      </div>
    )
}

export default Register;