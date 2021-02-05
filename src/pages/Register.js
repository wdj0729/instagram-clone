/* eslint-disable */
import React, {useState} from 'react';
import logo2 from './image2.jpg';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
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

    const [emailFlag,setEmailFlag] = useState(false);
    const [passwordFlag,setPasswordFlag] = useState(false);
    const [nameFlag,setNameFlag] = useState(false);
    const [nicknameFlag,setNicknameFlag] = useState(false);

    const history = useHistory();

    const onchangeEmail = (e) => {
      // 이메일 유효성 검사
      const regExpEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      
      if (regExpEmail.test(email) === true){
        console.log("사용가능한 이메일입니다.");
        setEmailFlag(true);
      } else {
        //console.log("유효하지 않은 이메일입니다.");
        setEmailFlag(false);
      }
      setEmail(e.target.value);
    };

    const onchangePassword = (e) => {
      // 최소 10~20자, 대문자 하나, 소문자 하나, 숫자 하나, 특수문자 하나 이상로 구성
      const regExpPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{10,20}$/; 
      
      if (regExpPwd.test(password) === true){
        console.log("사용가능한 비밀번호입니다.");
        setPasswordFlag(true);
      } else {
        //console.log("유효하지 않은 비밀번호입니다.");
        setPasswordFlag(false);
      }
      setPassword(e.target.value);
    };

    const onchangeNickname = (e) => {
      // 최소 3~8자, 한글, 영어, 숫자로 구성
      const regExpNick = /^[가-힣|a-z|A-Z|0-9|\*]{3,8}$/;

      if (regExpNick.test(nickname) === true){
        console.log("사용가능한 닉네임입니다.");
        setNicknameFlag(true);
      } else {
        //console.log("유효하지 않은 닉네임입니다.");
        setNicknameFlag(false);
      }
      setNickname(e.target.value);
    };

    const onchangeName = (e) => {
      // 최소 2~5자, 한글로 구성
      const regExpName = /^[가-힣\*]{2,5}$/;
      if (regExpName.test(name) === true){
        console.log("사용가능한 이름입니다.");
        setNameFlag(true);
      } else {
        //console.log("유효하지 않은 이름입니다.");
        setNameFlag(false);
      }
      setName(e.target.value);
    };

    const onSubmit = (e) => {
      e.preventDefault();

      if(emailFlag === true && (emailFlag === passwordFlag === nicknameFlag === nameFlag)){
        axios({
          url: '/signup',
          method: 'post',
          baseURL: 'http://110.47.129.156:8080/api/',
          headers: { 
            'Content-Type': 'application/json;charset=utf-8'
          },
          params: {
            ID: 12345
          },
          data: {
            email: email,
            password: password,
            nickname: nickname,
            name: name
          }, 
          withCredentials: true
        })
        .then(function(response){
          console.log(response);
          history.push("/");
        }).catch(function(error){
          console.log(error);
        }).then(function(){
          console.log("SIGNUP");
        });
      }
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