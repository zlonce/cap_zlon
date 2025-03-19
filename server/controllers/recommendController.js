const axios = require('axios');

// FastAPI 서버 URL
<<<<<<< HEAD
const majorAPIUrl = 'https://7e7a-35-230-6-73.ngrok-free.app/recommend'; //전공
const generalAPIUrl = 'https://aae6-35-231-45-190.ngrok-free.app/recommend2'; //교양
=======
const majorAPIUrl = 'https://eb4f-34-106-10-62.ngrok-free.app/recommend'; //전공
const generalAPIUrl = 'https://5cf5-34-125-9-40.ngrok-free.app/recommend2'; //교양
>>>>>>> 5de396b51032fbde7fb510936d94afd9059ee88a



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