import React from 'react';
import './Signup.css';
import { Link } from "react-router-dom"; 
import Layout from '../Layout/Layout';

const Signup = () => {
    return (
        <Layout>
            <div className="signup-header">
                <h3>회원가입</h3>
            </div>
            <div className="form-container">
                <div className="signup-form-group">
                    <div>
                    <label htmlFor="username">아이디</label>
                    <button type="button" className="signup-check-button">중복확인</button>
                    </div>
                    <input type="text" id="username" placeholder="아이디" />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" placeholder="비밀번호" />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="confirm-password">비밀번호 재확인</label>
                    <input type="password" id="confirm-password" placeholder="비밀번호 재확인" />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="name">이름</label>
                    <input type="text" id="name" placeholder="이름" />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="email">이메일</label>
                    <input type="email" id="email" placeholder="이메일" />
                </div>
                <div className = 'LoginLink'>
                    <Link to= '/'>
                    <button type="submit" className="signup-submit-button">확인</button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Signup;