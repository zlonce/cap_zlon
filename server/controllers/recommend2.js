const axios = require('axios');
const readline = require('readline');

// FastAPI 서버 URL (ngrok에서 생성된 URL로 변경)
const API_URL = 'https://8d03-34-106-199-118.ngrok-free.app/recommend2';

// 터미널에서 사용자 입력 받기 설정
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 사용자 입력 함수
function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

(async function () {
  try {
    console.log("===== 교양 추천 프로그램 =====");

    // 학년 입력
    const year = await askQuestion("학년을 입력하세요 (숫자): ");
    const semester = await askQuestion("학기를 입력하세요 (숫자): ");
    const major = await askQuestion("학과를 입력하세요 (예: 컴퓨터공학과): ");

    // FastAPI에 데이터 전송
    const response = await axios.post(API_URL, {
      semester: parseInt(semester),
      major: major.trim(),
    });

    // 추천 결과 출력
    console.log("\n추천된 교과목:");
    response.data.recommendations.forEach((course, index) => {
      console.log(`${index + 1}. ${course}`);
    });
  } catch (error) {
    if (error.response) {
      console.error("\nAPI 에러:", error.response.data.detail);
    } else {
      console.error("\n네트워크 또는 기타 오류:", error.message);
    }
  } finally {
    rl.close();
  }
})();
