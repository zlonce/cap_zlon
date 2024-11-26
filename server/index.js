const express = require('express');
const bodyParser = require('body-parser');
const recommendRoutes = require('./routes/recommend');
const cors = require('cors');

const app = express();
const PORT = 8000;

// 미들웨어 설정
app.use(bodyParser.json());
app.use(cors());

// 추천 라우터 연결
app.use('/api', recommendRoutes);

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
