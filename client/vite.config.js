import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // 폰으로 테스트 하는용도도
  server: {
    host: true,  // 외부 IP에서도 접속 가능하게 설정
    port: 5173,  // 원하는 포트 (기본 5173)
  },
})
