export type Assignment = {
  id: number;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fileType: "PDF" | "DOCX";
  originalFileName: string;
  fileSize: string;
  previewImage: string;
  downloadPath: string;
  tools: string[];
  skills: string[];
  status: "Hoàn thành";
  theme: string;
  viewerSummary: string;
  keyPoints: string[];
  previousSlug: string | null;
  nextSlug: string | null;
};

export const assignments: Assignment[] = [
  {
    id: 1,
    slug: "thao-tac-tep-windows",
    number: "01",
    title: "Thao tác tệp và thư mục trên Windows",
    subtitle: "Rèn luyện kỹ năng quản lý dữ liệu số nền tảng",
    description:
      "Thực hành tạo, đổi tên, sao chép, di chuyển và xóa tệp/thư mục bằng File Explorer qua quy trình có ảnh minh họa.",
    fileType: "PDF",
    originalFileName: "Btbb 1.pdf",
    fileSize: "2,49 MB",
    previewImage: "/images/assignments/assignment-01.png",
    downloadPath: "/downloads/Btbb%201.pdf",
    tools: ["Windows", "File Explorer"],
    skills: ["Quản lý tệp", "Tổ chức dữ liệu", "Thao tác hệ thống"],
    status: "Hoàn thành",
    theme: "Sóng sớm",
    viewerSummary: "Tài liệu 14 trang ghi lại từng bước thao tác trên Windows bằng ảnh chụp màn hình thực tế.",
    keyPoints: ["Tạo cấu trúc thư mục", "Đổi tên và sao chép", "Di chuyển và xóa an toàn"],
    previousSlug: null,
    nextSlug: "danh-gia-thong-tin-hoc-thuat",
  },
  {
    id: 2,
    slug: "danh-gia-thong-tin-hoc-thuat",
    number: "02",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    subtitle: "Chủ đề: Việc học Tiếng Anh trong kỷ nguyên số",
    description:
      "Đối chiếu mười nguồn từ Google Scholar, thư viện và báo điện tử theo tác giả, nhà xuất bản, phương pháp, trích dẫn và tính cập nhật.",
    fileType: "DOCX",
    originalFileName: "btbb2.docx",
    fileSize: "1,29 MB",
    previewImage: "/images/assignments/assignment-02.svg",
    downloadPath: "/downloads/btbb2.docx",
    tools: ["Google Scholar", "Thư viện số", "Microsoft Word"],
    skills: ["Tìm kiếm học thuật", "Đánh giá nguồn", "Trích dẫn"],
    status: "Hoàn thành",
    theme: "Nước trong",
    viewerSummary: "Bảng đánh giá mười nguồn học thuật và nguồn mở, kèm danh mục tài liệu tham khảo đầy đủ.",
    keyPoints: ["So sánh độ tin cậy", "Kiểm tra tính cập nhật", "Lập danh mục tham khảo"],
    previousSlug: "thao-tac-tep-windows",
    nextSlug: "cai-thien-prompt",
  },
  {
    id: 3,
    slug: "cai-thien-prompt",
    number: "03",
    title: "Cải thiện prompt để truyền đạt dễ hiểu",
    subtitle: "Từ giải thích khoa học đến kể chuyện về thuyết tương đối",
    description:
      "So sánh prompt chung với prompt có vai trò và đối tượng tiếp nhận, qua đó quan sát sự thay đổi về độ rõ ràng, trực quan và cảm hứng.",
    fileType: "PDF",
    originalFileName: "btbb 3.pdf",
    fileSize: "786 KB",
    previewImage: "/images/assignments/assignment-03.png",
    downloadPath: "/downloads/btbb%203.pdf",
    tools: ["AI tạo sinh", "Prompting"],
    skills: ["Đặt câu hỏi", "Storytelling", "Tư duy người đọc"],
    status: "Hoàn thành",
    theme: "Bọt biển",
    viewerSummary: "Tài liệu 5 trang phân tích hai cách đặt prompt và hai phong cách phản hồi về thuyết tương đối.",
    keyPoints: ["Xác định vai trò", "Hiểu người tiếp nhận", "Chuyển kiến thức thành câu chuyện"],
    previousSlug: "danh-gia-thong-tin-hoc-thuat",
    nextSlug: "cong-cu-hop-tac-truc-tuyen",
  },
  {
    id: 4,
    slug: "cong-cu-hop-tac-truc-tuyen",
    number: "04",
    title: "Sử dụng công cụ hợp tác trực tuyến",
    subtitle: "Tổ chức công việc cho một dự án nhóm",
    description:
      "Lựa chọn và thực hành hệ sinh thái công cụ để lên lịch, đồng biên tập, lưu trữ và giao tiếp trong quá trình làm việc nhóm.",
    fileType: "PDF",
    originalFileName: "btbb 4.pdf",
    fileSize: "1,20 MB",
    previewImage: "/images/assignments/assignment-04.png",
    downloadPath: "/downloads/btbb%204.pdf",
    tools: ["Google Calendar", "Google Docs", "Google Drive", "Zalo", "Google Meet"],
    skills: ["Cộng tác", "Quản lý thời gian", "Giao tiếp nhóm"],
    status: "Hoàn thành",
    theme: "Gió biển",
    viewerSummary: "Tài liệu 6 trang minh họa quy trình phối hợp bằng các công cụ cộng tác trực tuyến phổ biến.",
    keyPoints: ["Quản lý nhiệm vụ", "Đồng biên tập", "Chia sẻ và thảo luận"],
    previousSlug: "cai-thien-prompt",
    nextSlug: "legal-sales-messages-reviews",
  },
  {
    id: 5,
    slug: "legal-sales-messages-reviews",
    number: "05",
    title: "What’s legal and what’s not in sales messages and online reviews",
    subtitle: "Mini-workshop 6 · Chapter 8 · Group 4",
    description:
      "Bài thuyết trình nhóm về quảng cáo phóng đại, quảng cáo gây hiểu lầm, người nổi tiếng, lời hứa sai lệch và review trả phí.",
    fileType: "PDF",
    originalFileName: "btbb 5.pdf",
    fileSize: "13,68 MB",
    previewImage: "/images/assignments/assignment-05.png",
    downloadPath: "/downloads/btbb%205.pdf",
    tools: ["Canva", "Nghiên cứu tình huống", "Thuyết trình nhóm"],
    skills: ["Business English", "Thuyết trình", "Phân tích đạo đức truyền thông"],
    status: "Hoàn thành",
    theme: "Bãi cát",
    viewerSummary: "Deck 26 trang bằng tiếng Anh kết hợp nền tảng lý thuyết, bảo vệ pháp lý và thảo luận ba tình huống thực tế.",
    keyPoints: ["Truth in advertising", "Deceptive practices", "Case discussion"],
    previousSlug: "cong-cu-hop-tac-truc-tuyen",
    nextSlug: "liem-chinh-ai-hoc-thuat",
  },
  {
    id: 6,
    slug: "liem-chinh-ai-hoc-thuat",
    number: "06",
    title: "Chính sách và nguyên tắc sử dụng AI trong học thuật",
    subtitle: "Tìm hiểu quy định liêm chính học thuật và xây dựng nguyên tắc cá nhân",
    description:
      "Phân tích chính sách AI của RMIT Việt Nam và đề xuất bảy nguyên tắc sử dụng AI minh bạch, có trách nhiệm trong học tập.",
    fileType: "PDF",
    originalFileName: "Bài tập bắt buộc 6.pdf",
    fileSize: "104 KB",
    previewImage: "/images/assignments/assignment-06.png",
    downloadPath: "/downloads/B%C3%A0i%20t%E1%BA%ADp%20b%E1%BA%AFt%20bu%E1%BB%99c%206.pdf",
    tools: ["Google Docs", "Nghiên cứu chính sách", "AI tạo sinh"],
    skills: ["Liêm chính học thuật", "Tư duy phản biện", "Sử dụng AI có trách nhiệm"],
    status: "Hoàn thành",
    theme: "Hoàng hôn ven biển",
    viewerSummary: "Tài liệu 3 trang tóm tắt chính sách, nêu nhận định cá nhân và hệ thống hóa bảy nguyên tắc sử dụng AI.",
    keyPoints: ["Minh bạch sử dụng AI", "Kiểm chứng thông tin", "Bảo vệ dữ liệu và bản quyền"],
    previousSlug: "legal-sales-messages-reviews",
    nextSlug: null,
  },
];

export const getAssignment = (slug: string) => assignments.find((item) => item.slug === slug);
