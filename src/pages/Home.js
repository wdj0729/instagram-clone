/* eslint-disable */
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const main = {
        paddingLeft: '25%',
        paddingTop: '4%',
        width: '100%',
        maxWidth: '935px',
    };

    const leftBox = {
        float:'left',
        paddingRight:'5%',
    };

    const leftImg = {
        height: '550px',
    };

    const rightBox = {
        float:'left',
        width:'350px',
        paddingRight:'20%',
    };

    const loginBox = {
        padding: '10px 0',
        border: '1px solid #dbdbdb',
        backgroundColor: 'white',
        maxWidth: '348px',
        height: '355px',
    };

    const loginBoxImg = {
        width: '200px',
        padding: '20px 0 20px 0',
    };

    const loginBoxForm = {
        height: '100px',
    };

    const loginBoxFormDiv1 = {
        padding: '0 0 10px 0',
    };

    const loginBoxFormInput = {
        backgroundColor: '#fafafa',
        width: '250px',
        height: '40px',
        borderRadius: '3px',
        border: '1px solid #dbdbdb',
    };

    const loginBoxFormDiv2 = {
        padding: '10px 0 20px 0',
    };

    const loginBoxFormButton = {
        backgroundColor: '#0095f6',
        color:'white',
        border: '1px solid transparent',
        borderRadius: '4px',
        width: '258px',
        height: '35px',
        fontSize: '1em',
        fontWeight: 'bold',
    };

    const loginBoxLink = {
        color: '#00376b',
        fontSize: '0.8em',
    };

    const registerBox = {
        marginTop:'5%',
        border: '1px solid #dbdbdb',
        backgroundColor: 'white',
        height: '65px',
    };

    const registerBoxP = {
        paddingTop: '1%',
    };

    const registerBoxLink = {
        color: '#0095f6',
        fontWeight: 'bold',
    };

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [emailFlag,setEmailFlag] = useState(false);
    const [passwordFlag,setPasswordFlag] = useState(false);

    const history = useHistory();

    const onchangeEmail = (e) => {
      // 이메일 유효성 검사
      const regExpEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      
      if (regExpEmail.test(e.target.value) === true){
        console.log("사용가능한 이메일입니다.");
        setEmailFlag(true);
      } else {
        // console.log("유효하지 않은 이메일입니다.");
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
        // console.log("유효하지 않은 비밀번호입니다.");
        setPasswordFlag(false);
      }
      setPassword(e.target.value);
    };

    const onSubmit = (e) =>{
      e.preventDefault();

      if(emailFlag === true && (emailFlag === passwordFlag)){
        axios({
          url: '/signin',
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
          }
        })
        .then(function(response){
          console.log(response);
          const { accessToken } = response.data;
          // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

          // accessToken을 localStorage, cookie 등에 저장하지 않는다!

          // 로그인한 페이지로 이동
          history.push("/LoginPage");
        }).catch(function(error){
          console.log(error);
        }).then(function(){
          console.log("SIGNIN");
        });
      }
    };

    return(
        <div style={main}>
        <div style={leftBox}>
          <img style={leftImg} src={process.env.PUBLIC_URL + '/img/image.jpg'}></img>
        </div>
        <div style={rightBox}>
          <div style={loginBox}>
            <img style={loginBoxImg} src={process.env.PUBLIC_URL + '/img/image2.jpg'}></img>
            <form style={loginBoxForm} onSubmit={onSubmit}>
              <div style={loginBoxFormDiv1}>
                <input style={loginBoxFormInput} placeholder="이메일" required onChange={onchangeEmail}></input>
              </div>
              <div style={loginBoxFormDiv1}>
                <input style={loginBoxFormInput} placeholder="비밀번호" type="password" required onChange={onchangePassword}></input>
              </div>
              <div style={loginBoxFormDiv2}>
                <button style={loginBoxFormButton}>로그인</button>
              </div>
              <Link style={loginBoxLink} to="/PasswordReset">비밀번호를 잊으셨나요?</Link>
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