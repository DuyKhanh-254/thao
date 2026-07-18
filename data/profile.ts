export type Profile = {
  fullName: string;
  initials: string;
  studentId: string;
  className: string;
  major: string;
  university: string | null;
  course: string | null;
  lecturer: string | null;
  academicYear: string | null;
  email: string | null;
  profileImage: string;
  introduction: string;
  quote: string;
};

export const profile: Profile = {
  fullName: "Nguyễn Thị Diệu Thảo",
  initials: "DT",
  studentId: "25041078",
  className: "25E25 · NN5",
  major: "Ngôn ngữ & Văn hóa Anh",
  university: null,
  course: null,
  lecturer: null,
  academicYear: null,
  email: null,
  profileImage: "/images/profile/nguyen-thi-dieu-thao.jpg",
  introduction:
    "Mình là Diệu Thảo, sinh viên ngành Ngôn ngữ & Văn hóa Anh. Portfolio này lưu lại sáu cột mốc từ kỹ năng số nền tảng đến nghiên cứu, hợp tác, thuyết trình và sử dụng AI có trách nhiệm.",
  quote: "Mỗi bài học là một con sóng nhỏ đưa mình gần hơn tới phiên bản tốt hơn.",
};

// Các trường null chưa xuất hiện trong tài liệu gốc và được giữ rõ ràng để dễ bổ sung.
