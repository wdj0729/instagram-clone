/* eslint-disable */
import React from 'react';

import logo2 from './image2.jpg';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Register = () => {
    const main = {
        paddingLeft: '38%',
        paddingTop: '2.2%',
        width: '100%',
        height: '600px',
    }

    const registerBox = {
        padding: '10px 0 0 0',
        border: '1px solid #dbdbdb',
        backgroundColor: 'white',
        maxWidth: '348px',
        height: '518px',
    }

    const registerBoxImg = {
        width: '200px',
        padding: '20px 0 0 0',
    }
    
    const registerBoxP = {
        margin: '0 40px 10px',
        color: '#8e8e8e',
        fontSize: '17px',
        fontWeight: '600',
    }

    const registerBoxForm = {
        height: '370px',
    }

    const registerBoxFormDiv1 = {
        padding: '0 0 10px 0',
    }

    const registerBoxFormInput = {
        backgroundColor: '#fafafa',
        width: '250px',
        height: '40px',
        borderRadius: '3px',
        border: '1px solid #dbdbdb',
    }

    const registerBoxFormDiv2 = {
        padding: '10px 0 20px 0',
    }

    const registerBoxFormButton = {
        backgroundColor: '#0095f6',
        color:'white',
        border: '1px solid transparent',
        borderRadius: '4px',
        width: '258px',
        height: '35px',
        fontSize: '1em',
        fontWeight: 'bold',
    }

    const registerBoxFormP = {
        color: '#8e8e8e',
        fontSize: '12px',
        fontWeight: '600',
        margin : '10px 40px',
    }

    const loginBox = {
      marginTop:'5%',
      border: '1px solid #dbdbdb',
      backgroundColor: 'white',
      height: '65px',
    }

    const loginBoxP ={
        paddingTop: '1%',
    }

    const loginBoxLink = {
      color: '#0095f6',
    }

    return(
      <div style={main}>
          <div style={registerBox}>
            <img style={registerBoxImg} src={logo2}></img>
            <p style={registerBoxP}>친구들의 사진과 동영상을 보려면 가입하세요.</p>
            <form style={registerBoxForm}>
              <div style={registerBoxFormDiv1}>
                <input style={registerBoxFormInput} placeholder="이메일 주소"></input>
              </div>
              <div style={registerBoxFormDiv1}>
                <input style={registerBoxFormInput} placeholder="성명"></input>
              </div>
              <div style={registerBoxFormDiv1}>
                <input style={registerBoxFormInput} placeholder="사용자 이름"></input>
              </div>
              <div style={registerBoxFormDiv1}>
                <input style={registerBoxFormInput} placeholder="비밀번호"></input>
              </div>
              <div style={registerBoxFormDiv2}>
                <button style={registerBoxFormButton}>가입</button>
              </div>
              <p style={registerBoxFormP}>가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</p>
            </form>
            <div style={loginBox}>
                <p style={loginBoxP}>계정이 있으신가요? <Link style={loginBoxLink} to="/register">로그인</Link></p>
            </div>
          </div>
      </div>
    )
}

export default Register;