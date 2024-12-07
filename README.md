# Asignment6_anm

## Single-sign-on (SSO)
Nguyên lý hoạt động


Một miền trung tâm (central domain) thường đóng vai trò là Identity Provider (IdP), qua đó xác thực được thực hiện và phiên được chia sẻ với các miền khác là server provider (SP).
## Hướng dẫn sử dụng:
### Install một số gói cần thiết
Chúng tôi sửa dụng nền tảng nên trước tiên các bạn cần tải Nodejs qua: https://nodejs.org/en/download/prebuilt-installer/current

Tham khảo: https://dev.to/qoobes/express-session-failing-with-typescript-types-express-session-1ehk

Sau đó, install một số package
```bash
npm uninstall @types/ty

npm install -D @types/express-session@1.17.0. 

npm install hbs

npm install xml2js

npm install zlib
```
Tùy theo terminal thông báo mà có thể install thêm một số package khác
### Bắt đầu chạy demo
Tiếp theo vào terminal của ide hay command promt của máy tính:

Tìm đến thư mục ví dụ "D:\MM_ANM\Github\main\SSO-asm6\SSO-main\SSO-main\identity-provider"

Chuyển hướng command đến link đó bằng cú pháp 
```bash
cd <path>
```
Ví dụ cd "D:\MM_ANM\Github\main\SSO-asm6\SSO-main\SSO-main\identity-provider"

Tương tự cho các thư mục còn lại và sau đó gõ vào promt lệnh: 
```bash
npm start
```
để bắt đầu chạy code

Truy cập vào: 

Identity Provider server (port 3000): http://localhost:3000

Service Provider server 1 (port 3001): http://localhost:3001

Service Provider server 2 (port 3002): http://localhost:3002

Thêm vào đấy các phương thức muốn thử nghiệm và api endponts để thử nghiệm: /login, /dashboard, /logout.

Ví dụ: http://localhost:3000/oidc/login
## Một số dịch vụ
- SAML:

generateSamlRequest: Tạo và mã hóa SAMLAuthnRequest để gửi đến IdP,

decodeAndParseSamlResponse: Giải mã SAMLResponse nhận từ IdP.

- OIDC:

authenticate(username: string, password: string): Xác thực người dùng qua username và pass-
word,

genAuthCode(userId: string, clientId: string): Tạo mã xác thực dựa trên userId và clientId,

validateAuthCode(authCode: string, clientId: string): Xác thực mã xác thực từ SP server,

generateAccessToken(userId: string, clientId: string): Tạo và mã hóa Access Token,

generateIdToken(userId: string, clientId: string, issuer: string): Tạo và mã hóa ID Token.

- CAS:

authenticate(username: string, password: string): Xác thực người dùng qua username và pass-

word, lưu thông tin đăng nhập vào session cookie nếu hợp lệ.

genTGT(username: string): Tạo Ticket Granting Ticket (TGT) để duy trì phiên làm việc.

genST(username: string): Tạo Service Ticket (ST) cho phiên làm việc.

validateService(ST: string): Xác thực tính hợp lệ của Service Ticket gửi từ SP server.

genXMLRes(username: string, serviceTicket: string): Tạo văn bản XML trả lời yêu cầu xác
thực ST kèm dữ liệu người dùng.
