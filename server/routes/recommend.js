const express = require('express');
const { recommendMajor, recommendGeneral } = require('../controllers/recommendController');
const { generateTimetables, formatTimetables } = require('../controllers/timetableController');
const router = express.Router();

// POST 요청: 시간표 추천
router.post('/recommend', async (req, res) => {
    const { year, semester, major, majorCredits, electiveCredits } = req.body;

    try {
        // 클라이언트에서 들어온 정보 출력
        console.log("==== 클라이언트 요청 정보 ====");
        console.log(`학과: ${major}`);
        console.log(`학년: ${year}`);
        console.log(`학기: ${semester}`);
        console.log(`전공 학점: ${majorCredits}`);
        console.log(`교양 학점: ${electiveCredits}`);

        // FastAPI에서 추천받은 과목 코드 가져오기
        const majorCodes = await recommendMajor(year, semester, major);
        const electiveCodes = await recommendGeneral(semester, major);

        // 추천받은 과목 코드 출력
        console.log("==== 추천받은 과목 코드 ====");
        console.log("전공 과목 코드:", majorCodes);
        console.log("교양 과목 코드:", electiveCodes);

        // 타임테이블 생성
        const timetables = generateTimetables(majorCredits, electiveCredits, majorCodes, electiveCodes);

        // 생성된 타임테이블 출력
        console.log("==== 생성된 시간표 ====");
        if (timetables.length > 0) {
            console.log(JSON.stringify(formatTimetables(timetables), null, 4));
        } else {
            console.error("조건에 맞는 시간표가 없습니다.");
        }

         // 변환된 시간표를 원하는 형식으로 변경
        const formattedTimetables = timetables.map(timetable => {
            return timetable.flatMap(subj => {
                // 각 `times` 배열을 개별 항목으로 풀어서 변환
                return subj.times.map(time => ({
                    day: time.day,
                    startTime: time.startTime,
                    endTime: time.endTime,
                    title: subj.name,
                    instructor: subj.pname,
                }));
            });
        });

        console.log(formattedTimetables);

        savedTimetables = formattedTimetables; // 시간표를 메모리에 저장

        // // 생성된 시간표 출력
        // console.log("==== 생성된 시간표 ====");
        // if (formattedTimetables.length > 0) {
        //     console.log(JSON.stringify(formattedTimetables, null, 4));
            
        // } else {
        //     console.error("조건에 맞는 시간표가 없습니다.");
        // }

        // 클라이언트에 처리 완료 상태 반환
        res.status(200).send('시간표 생성완료');
    } catch (error) {
        console.error('시간표 추천 처리 중 오류:', error.message);
        res.status(500).send('원하는 시간표가 존재하지 않습니다');
    }
});

// 저장된 시간표를 반환하는 GET 요청
router.get('/timetables', (req, res) => {
    if (savedTimetables.length > 0) {
        res.status(200).json(savedTimetables);  // 저장된 시간표를 반환
    } else {
        res.status(404).send('시간표 데이터가 없습니다.');
    }
});



module.exports = router;
