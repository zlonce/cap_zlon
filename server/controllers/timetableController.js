//박기성이 업데이트함


const fs = require('fs');
const path = require('path');

// JSON 파일 로드
const mandatorySubjects = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/mandatory.json'), 'utf8') // 전공과목 정보
);
const choiceSubjects = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/choice.json'), 'utf8') // 교양과목 정보
);

// 시간표가 겹치는지 확인하는 함수
function isOverlap(times1, times2) {
    for (const time1 of times1) {
        for (const time2 of times2) {
            if (
                time1.day === time2.day &&
                !(time1.endTime <= time2.startTime || time1.startTime >= time2.endTime)
            ) {
                return true;
            }
        }
    }
    return false;
}

// 학점 합산 함수
function getTotalCredits(subjects) {
    return subjects.reduce((sum, subj) => sum + subj.credits, 0);
}

// 모든 조합 생성 함수
function generateCombinations(subjects, requiredCredits) {
    const combinations = [];

    function helper(selected, index) {
        const totalCredits = getTotalCredits(selected);
        if (totalCredits === requiredCredits) {
            combinations.push([...selected]);
            return;
        }
        if (index >= subjects.length || totalCredits > requiredCredits) return;

        const current = subjects[index];
        let canAdd = true;

        for (const subj of selected) {
            if (isOverlap(subj.times, current.times)) {
                canAdd = false;
                break;
            }
        }

        if (canAdd) {
            selected.push(current);
            helper(selected, index + 1);
            selected.pop();
        }

        helper(selected, index + 1);
    }

    helper([], 0);
    return combinations;
}

// 시간표 생성 함수
function generateTimetables(majorCredits, electiveCredits, majorCodes, electiveCodes) {
    // 학점 0인 과목 제거
    const majorSubjects = majorCodes
        .map(code => mandatorySubjects[code])
        .filter(subj => subj && subj.credits > 0);

    const electiveSubjects = electiveCodes
        .map(code => choiceSubjects[code])
        .filter(subj => subj && subj.credits > 0);

    const majorCombinations = generateCombinations(majorSubjects, majorCredits);

    const allTimetables = [];
    for (const majorCombo of majorCombinations) {
        const electiveCombinations = generateCombinations(
            electiveSubjects.filter(elective =>
                !majorCombo.some(major => isOverlap(major.times, elective.times))
            ),
            electiveCredits
        );

        for (const electiveCombo of electiveCombinations) {
            allTimetables.push([...majorCombo, ...electiveCombo]);
        }
    }

    // 유니크 시간표 만들기
    const uniqueTimetables = Array.from(new Set(allTimetables.map(JSON.stringify))).map(JSON.parse);

    // 무조건 3개 옵션 출력
    const finalTimetables = [];
    const total = uniqueTimetables.length;
    
    if (total > 0) finalTimetables.push(uniqueTimetables[0]); // 첫 번째 시간표
    if (total > 1) finalTimetables.push(uniqueTimetables[Math.floor(total / 2)]); // 중간 시간표
    if (total > 2) finalTimetables.push(uniqueTimetables[total - 1]); // 마지막 시간표
    

    return finalTimetables;
}

// 결과를 JSON 형식으로 반환
function formatTimetables(timetables) {
    const result = {};
    timetables.forEach((timetable, index) => {
        result[(index + 1).toString()] = timetable.map(subj => ({
            name: subj.name,
            pname: subj.pname,
            times: subj.times
        }));
    });
    return result;
}

module.exports = { generateTimetables, formatTimetables };
 
