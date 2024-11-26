import React from 'react';
import './Editprofile.css';
import Layout from '../Layout/Layout';

const Editprofile = () => {
    return (
        <Layout>
            <form className="Edit-form">
                <div className="header">
                    <img src="/Signup.jpeg" alt="personimg" className="signup-personimg" />
                    <h3>프로필 수정</h3>
                    <p>자신의 프로필을 수정할 수 있습니다</p>
                </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="username">아이디</label>
                            <button type="button" className="check-button">중복확인</button>
                        </div>
                        <input type="text" id="username" placeholder="아이디" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="current-password">현재 비밀번호</label>
                        <input type="password" id="current-password" placeholder="현재 비밀번호" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-password">변경할 비밀번호</label>
                        <input type="password" id="new-password" placeholder="변경할 비밀번호" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">비밀번호 재확인</label>
                        <input type="password" id="confirm-password" placeholder="비밀번호 재확인" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">이름</label>
                        <input type="text" id="name" placeholder="이름" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" placeholder="이메일" />
                    </div>
                    <button type="submit" className="submit-button">확인</button>
                </form>
        </Layout>
    );
};

export default Editprofile;
