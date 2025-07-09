# AskBee

Chạy node modules: npm i ở client và server nếu chạy lần đầu
Cài react-route-dom: npm install react-router-dom
Cài tailwind: npm install -D tailwindcss postcss autoprefixer
Khởi tạo tailwind: npx tailwindcss init -p
cài type definitions:npm install --save-dev @types/node
Cài mongo: npm install express cors mongoose
Chạy server với Docker: docker-compose up --build
Cài mongoose: npm install mongoose @types/mongoose
|-----------------------------------Công nghệ sử dụng---------------------------------------------------------------------|

- FE: ReactJS, HTML, CSS, JavaScript
- BE: NodeJS, Python,ExpressJS
- SQL: MongoDB
  |-----------------------------------------------------------------------------------------------------------------------|
  Tạo QRCode:npm install qrcode.react
- Cấu trúc dự án:
  - db.ts: Kết nối MongoDB, xử lý lỗi.
  - app.ts: Khởi động Express, middleware (CORS, JSON), route chính.
  - apis/\_.ts: Định nghĩa API endpoint.
  - controllers/\_.ts: Xử lý logic business.
  - models/\_.ts: Định nghĩa schema MongoDB.
  - types/\_.ts: Định nghĩa kiểu TypeScript.
    .env: Lưu config (URI, SECRET, PORT).
- Luồng hoạt động:
  - Khởi động: app.ts gọi connectDB, chạy server.
  - Request: Client gửi HTTP (GET/POST) đến /api/....
  - Route: apis/\*.ts định tuyến đến controller.
  - Controller: Xử lý logic, gọi model (MongoDB).
  - Response: Trả về JSON (thành công/lỗi).
