# ✦ Story Builder by AI

> Công cụ xây dựng cốt truyện và chơi game nhập vai văn bản **(Text RPG)** được dẫn dắt bởi AI.  
> Chạy hoàn toàn trên trình duyệt — không cần server, không cần tài khoản đám mây, không quảng cáo.

---

## ⚡ Bắt đầu ngay

```
1. Tải file 3 file index, script, style về máy
2. Mở file index bằng trình duyệt (double-click)
3. Đăng ký tài khoản cục bộ
4. Nhập API Key của bất kỳ AI nào bên dưới
5. Xây dựng cốt truyện → Xuyên không vào truyện!
```

> 🌐 **Hoặc deploy lên GitHub Pages** để dùng mọi lúc, mọi nơi _(xem hướng dẫn bên dưới)_

---

## 🎮 Tính năng

### 📖 Story Builder — Xây dựng cốt truyện

Chọn tag theo từng danh mục, AI sẽ tự tạo truyện dựa trên lựa chọn của bạn:

| Danh mục | Ví dụ |
|---|---|
| 📚 Thể loại | Fantasy, Sci-Fi, Romance, Horror, Slice of Life, Isekai... |
| 🌍 Bối cảnh | Thời gian, không gian, môi trường |
| 🎭 Vai trò & 🧠 Tính cách | Nhân vật chính |
| 🎯 Mục tiêu & ⚔️ Xung đột | Động lực câu chuyện |
| 🎨 Tone | Ấm áp / Đen tối / Hồi hộp / Bi tráng... |
| ⚡ Hệ thống sức mạnh | Tu luyện, Level system, Phép thuật... |
| 👽 Chủng tộc & 🛡️ Phe phái | Xây dựng thế giới |
| 📏 Độ dài | Từ 6-word story đến web novel hàng triệu từ |

**3 chế độ xây dựng:**
- **① Đơn Giản** — các tag cơ bản, phù hợp người mới
- **② Nâng Cao** — đầy đủ tất cả danh mục
- **③ Thủ Công** — viết tự do hoàn toàn

### 🎲 Text RPG — Chơi truyện với AI Game Master

- AI tự đặt tên truyện, xây dựng thế giới, dẫn dắt diễn biến
- Lựa chọn động A/B/C sau mỗi lượt, hoặc tự hành động tự do
- **Random Event** (~20%) tạo bất ngờ phù hợp thể loại
- Nhiều nhánh kết thúc: tốt / xấu / bí mật / trung lập
- Auto-save sau mỗi lượt chơi

### 🔑 Quản lý API đa nền tảng

Hỗ trợ **7 AI Provider**, **lưu nhiều key cùng lúc** cho mỗi hãng:

| Provider | Model tiêu biểu | Ghi chú |
|---|---|---|
| 🤖 Google Gemini | Gemini 2.5 Flash ⭐ | Miễn phí, tiếng Việt tốt nhất |
| ⚡ Groq | Qwen3 32B | 14.400 req/ngày miễn phí |
| 🐋 DeepSeek | DeepSeek V3 | Rẻ nhất thị trường |
| 🔷 Claude (Anthropic) | Claude Sonnet 4.5 | $5 credit khi đăng ký |
| ✨ OpenAI | GPT-4o mini | $5 credit khi đăng ký |
| 🔀 OpenRouter | DeepSeek V3 Free | Hàng trăm model, nhiều cái miễn phí |
| 🧠 Cerebras | Qwen3 235B | 1.000.000 token/ngày miễn phí |

- ✅ **Test kết nối** ngay sau khi nhập key
- ✅ **Quick-select** chuyển giữa các key bằng 1 click
- ✅ Lưu nhiều key cho cùng 1 hãng, xóa từng key riêng lẻ
- ✅ Tự chọn model hoặc nhập tên model tùy ý

### 👤 Hệ thống tài khoản

- Đăng ký / đăng nhập cục bộ (localStorage)
- Nhiều tài khoản trên cùng một trình duyệt
- Tủ Truyện: quản lý, đổi tên, xóa truyện

### 💾 Backup & Restore

- Xuất toàn bộ tài khoản ra file `.json`: tất cả truyện + tất cả API key
- Import trên máy khác → tự động tạo tài khoản và đăng nhập
- Upload ngay từ màn hình đăng nhập, không cần login trước

---

## 📁 Cấu trúc

```
Story_Builder_by_AI.html   ← file duy nhất, mở là chạy
```

---

## 🌐 Deploy lên GitHub Pages

1. Tạo repository mới trên GitHub
2. Upload `Story_Builder_by_AI.html`, đổi tên thành `index.html`
3. Vào **Settings → Pages → Source:** `Deploy from a branch` → `main` → `/ (root)`
4. Truy cập: `https://[username].github.io/[repo-name]`

---

## 🔒 Bảo mật & Quyền riêng tư

- Không có server — toàn bộ xử lý trên trình duyệt của bạn
- API key chỉ lưu trong `localStorage` và gửi thẳng đến provider bạn chọn
- Dữ liệu truyện không rời khỏi máy bạn
- ⚠️ Xóa cache trình duyệt = mất dữ liệu → nên backup định kỳ bằng nút 💾

---

## 📄 License

MIT — tự do sử dụng, chỉnh sửa, phân phối.
