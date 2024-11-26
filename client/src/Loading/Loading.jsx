import React from 'react';
import './Loading.css';
import Layout from "../Layout/Layout";

const Loading = () => {
    return (
        <Layout>
            <div className="loading-container">
                <div className="loading-text top">
                    ! 반영한 과목에 따라 과목을 추천중이에요 !
                </div>
                <div className="loading-dots">
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="dot"></div>
                    ))}
                </div>
                <div className="loading-text bottom">
                    ! 잠시만 기다려주세요 !
                </div>
            </div>
        </Layout>
    );
};

export default Loading;