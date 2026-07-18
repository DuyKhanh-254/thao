import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookMarked, Brain, Heart, MessageCircle, Search, Users } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { MotionReveal } from "@/components/MotionReveal";
import { WaveDivider } from "@/components/WaveDivider";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Tổng kết",
  description: "Kỹ năng, suy ngẫm và lời cảm ơn sau sáu bài tập của Nguyễn Thị Diệu Thảo.",
};

const skills = [
  { title: "Năng lực số", note: "Quản lý tệp và hệ sinh thái công cụ", icon: BookMarked, className: "skill-node--digital" },
  { title: "Nghiên cứu", note: "Tìm, đối chiếu và đánh giá nguồn", icon: Search, className: "skill-node--research" },
  { title: "Giao tiếp", note: "Prompt rõ, kể chuyện và thuyết trình", icon: MessageCircle, className: "skill-node--communication" },
  { title: "Cộng tác", note: "Lên lịch, đồng biên tập và chia sẻ", icon: Users, className: "skill-node--team" },
  { title: "Tư duy phản biện", note: "Nhìn bằng chứng, đạo đức và tác động", icon: Brain, className: "skill-node--thinking" },
];

export default function SummaryPage() {
  return (
    <PageShell>
      <section className="skills-section" id="ky-nang" aria-labelledby="skills-title">
        <div className="shell">
          <MotionReveal className="summary-page-head">
            <p className="kicker"><span /> 01 · Kỹ năng học được</p>
            <h1 id="skills-title">Những năng lực<br /><em>đọng lại.</em></h1>
            <p>Không gán phần trăm tùy ý. Bản đồ này chỉ kết nối những kỹ năng thực sự xuất hiện trong sáu bài làm.</p>
          </MotionReveal>
          <div className="skill-map">
            <svg viewBox="0 0 1080 560" preserveAspectRatio="none" aria-hidden="true">
              <path d="M58 290c138-255 263 167 430-79 146-214 271 270 530 16" />
              <path className="skill-map__foam" d="M58 290c138-255 263 167 430-79 146-214 271 270 530 16" />
            </svg>
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <MotionReveal key={skill.title} className={`skill-node ${skill.className}`} delay={index * 0.07}>
                  <span><Icon aria-hidden="true" /></span><div><strong>{skill.title}</strong><small>{skill.note}</small></div>
                </MotionReveal>
              );
            })}
            <MotionReveal className="skill-anchor" delay={0.25}>
              <Heart aria-hidden="true" /><span><strong>Học tập độc lập</strong><small>Biết đặt câu hỏi và tự chịu trách nhiệm</small></span>
            </MotionReveal>
          </div>
        </div>
        <WaveDivider tone="sand" />
      </section>

      <section className="reflection-section" id="tong-ket" aria-labelledby="reflection-title">
        <div className="shell reflection-grid">
          <MotionReveal className="reflection-title-block">
            <p className="kicker"><span /> 02 · Tổng kết</p>
            <h2 id="reflection-title">Nhật ký<br /><em>bên bờ.</em></h2>
            <p className="reflection-lead">Điều đáng nhớ nhất không phải một công cụ riêng lẻ, mà là cách chọn công cụ và cách kiểm chứng trước khi sử dụng.</p>
          </MotionReveal>
          <MotionReveal className="journal journal--progress">
            <span className="journal__number">01</span><p className="eyebrow">Tiến bộ đạt được</p>
            <h3>Từ thao tác theo bước đến biết giải thích lựa chọn</h3>
            <p>Ở bài đầu, quá trình học được ghi lại bằng các bước cụ thể. Đến những bài sau, nội dung chuyển sang so sánh nguồn, phân tích tình huống, điều chỉnh cách truyền đạt và hình thành nguyên tắc cá nhân.</p>
          </MotionReveal>
          <MotionReveal className="journal journal--lesson" delay={0.08}>
            <span className="journal__number">02</span><p className="eyebrow">Bài học đáng nhớ</p>
            <blockquote>Thông tin chỉ thực sự hữu ích khi nguồn đáng tin, cách truyền đạt phù hợp và người học vẫn giữ vai trò quyết định.</blockquote>
          </MotionReveal>
          <MotionReveal className="journal journal--challenge" delay={0.14}>
            <span className="journal__number">03</span><p className="eyebrow">Thử thách đã đi qua</p>
            <p>Biến kiến thức trừu tượng thành câu chuyện dễ hiểu; phối hợp nhiều công cụ trong dự án nhóm; và cân bằng giữa tiện ích AI với liêm chính học thuật.</p>
          </MotionReveal>
          <MotionReveal className="journal journal--next" delay={0.2}>
            <span className="journal__number">04</span><p className="eyebrow">Giới hạn & hướng tiếp theo</p>
            <p>Các bài làm mới là những dấu mốc đầu tiên. Hướng phát triển tiếp theo là đào sâu kỹ năng nghiên cứu, chuẩn hóa trích dẫn và nâng chất lượng trình bày bằng tiếng Anh.</p>
          </MotionReveal>
        </div>
      </section>

      <section className="thanks-section" id="cam-on" aria-labelledby="thanks-title">
        <div className="thanks-section__sun" aria-hidden="true" />
        <div className="shell thanks-card">
          <MotionReveal className="thanks-card__content">
            <p className="kicker"><span /> 03 · Cảm ơn thầy cô</p>
            <h2 id="thanks-title">Lời<br /><em>cảm ơn.</em></h2>
            <p className="thanks-message">Em xin chân thành cảm ơn thầy cô phụ trách học phần đã hướng dẫn, tạo cơ hội để em thực hành và nhìn lại quá trình học tập qua từng bài. Những góp ý và yêu cầu trong môn học đã giúp em tiến bộ không chỉ ở kỹ năng sử dụng công cụ, mà còn ở cách suy nghĩ và chịu trách nhiệm với sản phẩm của mình.</p>
            <blockquote>“Khép lại một chặng học để mở ra một đường chân trời mới.”</blockquote>
            <div className="signature"><span>Trân trọng,</span><strong>{profile.fullName}</strong><small>{profile.className} · MSSV {profile.studentId}</small></div>
          </MotionReveal>
          <MotionReveal className="thanks-card__nav" delay={0.12}>
            <Link className="button button--secondary" href="/assignments"><ArrowLeft size={18} aria-hidden="true" /> Xem lại bài tập</Link>
            <Link className="button button--primary" href="/">Về Trang chủ <ArrowRight size={18} aria-hidden="true" /></Link>
          </MotionReveal>
        </div>
        <div className="thanks-shore" aria-hidden="true"><span /><span /></div>
      </section>
    </PageShell>
  );
}
