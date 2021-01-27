/* eslint-disable */
import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Home, PasswordReset, Register } from './pages';

class App extends Component {
  render(){
    return (
      <div className='App'>
        <Router>
          <Route exact path='/' component={Home}/>
          <Route path='/passwordReset' component={PasswordReset}/>
          <Route path='/register' component={Register}/>
        </Router>
        <div className='footer'>
          <div className='footerDiv1'>
            <p>소개</p><p>블로그</p><p>채용 정보</p><p>도움말</p><p>API</p><p>개인정보처리방침</p>
            <p>약관</p><p>인기 계정</p><p>해시태그</p><p>위치</p>
          </div>
          <div className='footerDiv2'>
            <p>뷰티</p><p>댄스 및 공연</p><p>피트니스</p><p>식음료</p><p>집 및 정원</p>
            <p>음악</p><p>시각 예술</p>
          </div>
          <div className='footerDiv3'>
            <p>한국어</p><p>© 2021 Instagram from Facebook</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
