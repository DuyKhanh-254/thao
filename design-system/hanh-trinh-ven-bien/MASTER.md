# Design system — Hành trình ven biển

> Nguồn chuẩn cho toàn bộ website. Hệ thống được hiệu chỉnh từ kết quả UI/UX Pro Max theo đúng nội dung và palette của dự án.

## Art direction

**Editorial shoreline**: một portfolio học thuật có nhịp điệu như đường bờ biển. Bố cục bất đối xứng, khoảng thở lớn, khối nội dung có hình dáng riêng và được nối bằng sóng/đường bờ. Không dùng card grid đồng dạng, dashboard, glassmorphism dày đặc hoặc ngôn ngữ quảng cáo du lịch.

- Nước biểu thị khám phá và chuyển động; cát là vùng neo cho nội dung suy ngẫm.
- Dùng SVG/CSS cho sóng, bọt, đường gió và hạt cát. Mỗi trang chỉ có một motif chính.
- Ảnh chân dung và preview bài thật luôn là tâm điểm; trang trí không che nội dung.

## Palette

| Token | Hex | Vai trò |
|---|---|---|
| `--ocean` | `#2AA7D6` | hành động, tuyến hành trình |
| `--deep` | `#0F6C8E` | heading, cấu trúc |
| `--aqua` | `#72D6F5` | ripple, highlight |
| `--foam` | `#FFFFFF` | bề mặt nội dung |
| `--mist` | `#F7FCFF` | nền chính |
| `--sand` | `#F5E6C8` | vùng neo hỗ trợ |
| `--sand-light` | `#FBF4E8` | nền phản tư |
| `--navy` | `#17465A` | body text |
| `--muted` | `#5E7F8D` | text phụ đạt tương phản |
| `--line` | `#CDEAF4` | đường biên |

Tỷ lệ mục tiêu: 64% foam/mist, 28% blue, 8% sand. Không dùng purple gradient, black section hay neon.

## Typography

- Display/headings: **Newsreader**, fallback Georgia, serif. Dùng italic có chọn lọc cho từ khóa mang tính hành trình.
- Body/UI: **Be Vietnam Pro**, fallback system sans. Hỗ trợ dấu tiếng Việt tốt.
- H1: `clamp(3.25rem, 8vw, 7.6rem)`, line-height .92–1.0 để dấu tiếng Việt không chạm dòng.
- H2: `clamp(2.5rem, 5vw, 5.2rem)`, line-height .96–1.04.
- Body: 1rem–1.125rem, line-height 1.7; độ rộng dòng 62–72ch.
- Eyebrow: 0.72rem, uppercase, tracking .16em; luôn đi kèm đường/nhãn hình học để không nhạt.
- Cụm display có chữ nghiêng phải xuống dòng rõ ràng; dùng offset fluid tối đa 6rem, không dùng khoảng lùi phần trăm trên cùng một dòng.

## Layout rhythm

- Container: `min(1180px, calc(100% - 40px))`; mobile chừa 20px mỗi bên.
- Section spacing: `clamp(5.5rem, 11vw, 10rem)`.
- 12 cột ở desktop, 6 cột tablet, 1 cột mobile.
- Trang chủ: hero triều lên → vùng cát thông tin → tuyến hành trình uốn lượn.
- Bài tập: 6 “điểm neo” alternating, khác silhouette nhưng chung nhịp.
- Tổng kết: bản đồ kỹ năng → nhật ký trên cát → khoảng biển lặng cảm ơn.

## Component language

- Nút chính: capsule xanh đậm, icon 18px, ripple/shine rất nhẹ; không phóng to khi hover.
- Nút phụ: nền trắng, viền deep sea; hover đổi màu/đổ bóng, không dịch layout.
- Panel: bo hữu cơ 24–56px có chủ đích; tránh mọi khối cùng một radius.
- Viewer: “tờ tài liệu trên bãi cát”, nền sáng, viền bọt, toolbar gọn.
- Navbar nổi cách mép 12–16px; active bằng wave underline và chấm ripple.
- Icon: Lucide nhất quán, không dùng emoji UI.

## Motion

- Duration 180–420ms; ease-out khi vào, ease-in khi rời.
- Reveal theo scroll bằng opacity + translate tối đa 24px.
- Wave wipe dùng cho mở viewer; route/page dùng fade ngắn.
- Không continuous animation. Parallax chỉ cho 1–2 lớp trang trí hero, biên độ nhỏ.
- `prefers-reduced-motion: reduce`: tắt parallax/reveal/smooth scroll và mọi transform không thiết yếu.

## UX decisions

- Nav chỉ có Trang chủ, Bài tập, Tổng kết; có skip link.
- Sáu bài xuất hiện trong DOM; viewer chỉ render khi người dùng mở.
- PDF dùng native embed + mở tab mới; DOCX có preview văn bản thực và tải tệp gốc.
- Nút tải luôn hiển thị tên file, loại, dung lượng gần CTA.
- Bài 1 không có previous, bài 6 không có next; bài 6 dẫn tới Tổng kết.
- Focus ring 3px aqua + outline deep; target tối thiểu 44px.

## Anti-patterns

- Không generic portfolio template, card grid, dashboard hay các hàng feature lặp lại.
- Không mặc định Tailwind-looking, gradient tím, glass card mờ khó đọc.
- Không backdrop blur lớn, particle storm, bounce, hover gây layout shift.
- Không dùng chữ xám nhạt dưới `#5E7F8D`, không lưu thông tin chỉ trong ảnh.
- Không bịa trường, giảng viên, email, mục tiêu hay phần trăm kỹ năng.

## Pre-delivery review

- Responsive 375 / 768 / 1024 / 1440, không tràn ngang.
- Contrast AA, semantic headings, alt text, keyboard và reduced motion.
- Mỗi major section có silhouette riêng; không có 3-card pattern.
- Sáu preview thật/meaningful, sáu download hoạt động, viewer không render ẩn.
- Hover 150–300ms, focus rõ, clickable có pointer.
