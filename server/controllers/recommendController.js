const axios = require('axios');

// FastAPI 서버 URL
const majorAPIUrl = 'https://ef23-34-125-86-35.ngrok-free.app/recommend';
const generalAPIUrl = 'https://8d03-34-106-199-118.ngrok-free.app/recommend2';

// 전공 추천 요청 함수
const recommendMajor = async (year, semester, major) => {
  try {
    const response = await axios.post(majorAPIUrl, {
      year: parseInt(year),
      semester: parseInt(semester),
      major: major.trim(),
    });
    return response.data.recommendations; // 추천 결과 반환
  } catch (error) {
    console.error('전공 추천 오류:', error.message);
    throw new Error('전공 추천 처리 중 오류가 발생했습니다.');
  }
};

// 교양 추천 요청 함수
const recommendGeneral = async (semester, major) => {
  try {
    const response = await axios.post(generalAPIUrl, {
      semester: parseInt(semester),
      major: major.trim(),
    });
    return response.data.recommendations; // 추천 결과 반환
  } catch (error) {
    console.error('교양 추천 오류:', error.message);
    throw new Error('교양 추천 처리 중 오류가 발생했습니다.');
  }
};

module.exports = { recommendMajor, recommendGeneral };
