const express = require('express');
const { recommendMajor, recommendGeneral } = require('../controllers/recommendController');
const router = express.Router();

// POST 요청: 시간표 추천
router.post('/recommend', async (req, res) => {
  const { year, semester, major } = req.body;

  try {
    // 전공 추천 요청
    const majorRecommendations = await recommendMajor(year, semester, major);

    // 교양 추천 요청
    const generalRecommendations = await recommendGeneral(semester, major);

    // 서버 터미널에 출력
    console.log('==== 추천 결과 ====');
    console.log('전공 추천:', majorRecommendations);
    console.log('교양 추천:', generalRecommendations);

    // 프론트엔드로는 응답 없이 처리 완료 상태만 반환
    res.status(200).send('추천 요청이 성공적으로 처리되었습니다.');
  } catch (error) {
    console.error('추천 처리 중 오류:', error.message);
    res.status(500).send('추천 처리 중 오류가 발생했습니다.');
  }
});

module.exports = router;
