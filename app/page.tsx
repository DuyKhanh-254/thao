import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, Compass, GraduationCap, Sparkles } from "lucide-react";
import { assignments } from "@/data/assignments";
import { profile } from "@/data/profile";
import { PageShell } from "@/components/PageShell";
import { MotionReveal } from "@/components/MotionReveal";
import { WaveDivider } from "@/components/WaveDivider";

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero" id="gioi-thieu" aria-labelledby="hero-title">
        <div className="hero__sun" aria-hidden="true" />
        <div className="hero__current hero__current--one" aria-hidden="true" />
        <div className="hero__current hero__current--two" aria-hidden="true" />
        <div className="shell hero__stage">
          <MotionReveal className="hero__eyebrow">
            <span>Portfolio học tập</span><span>06 cột mốc</span><span>{profile.className}</span>
          </MotionReveal>
          <div className="hero__portrait-wrap">
            <div className="hero__portrait-foam" aria-hidden="true" />
            <div className="hero__portrait">
              <Image src={profile.profileImage} alt={`Ảnh chân dung của ${profile.fullName}`} fill priority sizes="(max-width: 768px) 74vw, 410px" />
            </div>
            <span className="hero__portrait-caption">Ngôn ngữ<br />& Văn hóa Anh</span>
          </div>
          <MotionReveal className="hero__title-wrap" delay={0.08}>
            <p className="kicker"><span /> Xin chào, mình là</p>
            <h1 id="hero-title"><span>Diệu</span> <em>Thảo</em></h1>
          </MotionReveal>
          <MotionReveal className="hero__intro" delay={0.16}>
            <p>{profile.introduction}</p>
            <div className="button-row">
              <Link className="button button--primary" href="/assignments">Xem bài tập <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link className="button button--text" href="#hanh-trinh">Khám phá hành trình <ArrowDown size={18} aria-hidden="true" /></Link>
            </div>
          </MotionReveal>
          <MotionReveal className="hero__quote" delay={0.22}>
            <Sparkles size={18} aria-hidden="true" />
            <blockquote>“{profile.quote}”</blockquote>
          </MotionReveal>
        </div>
        <div className="hero__shore" aria-hidden="true"><span /><span /><span /></div>
      </section>

      <section className="home-summary sand-field" id="tom-tat" aria-labelledby="summary-title">
        <div className="shell">
          <MotionReveal className="section-heading section-heading--offset">
            <p className="kicker"><span /> 02 · Tóm tắt</p>
            <h2 id="summary-title">Một khoảng dừng<br /><em>trên bờ cát.</em></h2>
            <p>Những nét chính về người học, hướng quan tâm và sáu bài làm — được sắp theo nhịp đọc, không phải một lưới thông tin đồng dạng.</p>
          </MotionReveal>

          <div className="summary-composition">
            <MotionReveal className="identity-note">
              <span className="note-pin" aria-hidden="true" />
              <p className="eyebrow">Hồ sơ người học</p>
              <dl>
                <div><dt>Họ và tên</dt><dd>{profile.fullName}</dd></div>
                <div><dt>MSSV</dt><dd>{profile.studentId}</dd></div>
                <div><dt>Lớp</dt><dd>{profile.className}</dd></div>
                <div><dt>Ngành</dt><dd>{profile.major}</dd></div>
              </dl>
            </MotionReveal>

            <MotionReveal className="learning-note" delay={0.08}>
              <div className="summary-icon"><Compass aria-hidden="true" /></div>
              <p className="eyebrow">Hướng học tập</p>
              <h3>Từ nền tảng số đến tư duy học thuật</h3>
              <p>Sáu bài tập cho thấy một lộ trình mở rộng: biết tổ chức dữ liệu, tìm nguồn đáng tin, giao tiếp rõ ràng, cộng tác có hệ thống và sử dụng AI có trách nhiệm.</p>
            </MotionReveal>

            <MotionReveal className="portfolio-tally" delay={0.14}>
              <div className="tally-number">06</div>
              <div><p className="eyebrow">Bài tập nguyên bản</p><p>5 PDF · 1 DOCX<br />Tất cả đều có preview và tệp tải xuống.</p></div>
              <Link href="/assignments" aria-label="Xem toàn bộ sáu bài tập"><ArrowRight aria-hidden="true" /></Link>
            </MotionReveal>

            <MotionReveal className="interest-strip" delay={0.2}>
              <p className="eyebrow">Mối quan tâm được thể hiện qua bài làm</p>
              <div><span>Nghiên cứu nguồn</span><span>Tiếng Anh</span><span>Hợp tác số</span><span>AI có trách nhiệm</span></div>
            </MotionReveal>
          </div>
        </div>
        <WaveDivider tone="mist" />
      </section>

      <section className="journey" id="hanh-trinh" aria-labelledby="journey-title">
        <div className="shell">
          <MotionReveal className="journey__head">
            <div>
              <p className="kicker"><span /> 03 · Hành trình</p>
              <h2 id="journey-title">Đi theo đường<br /><em>con nước.</em></h2>
            </div>
            <p>Khởi đầu bằng thao tác số cơ bản, mỗi cột mốc mở thêm một năng lực mới. Tuyến học tập không thẳng tuyệt đối — nó uốn theo thử nghiệm, phản hồi và sự trưởng thành.</p>
          </MotionReveal>
          <div className="journey-map">
            <svg className="journey-route" viewBox="0 0 1120 680" preserveAspectRatio="none" aria-hidden="true">
              <path d="M55 85C255 8 302 205 494 154s213-76 345 28c156 122-11 202-188 197-150-4-227 44-155 130 87 104 282 2 562 90" />
              <path className="journey-route__foam" d="M55 85C255 8 302 205 494 154s213-76 345 28c156 122-11 202-188 197-150-4-227 44-155 130 87 104 282 2 562 90" />
            </svg>
            <div className="journey-origin"><Compass aria-hidden="true" /><strong>Điểm bắt đầu</strong><span>Làm quen với nền tảng số</span></div>
            {assignments.map((item, index) => (
              <MotionReveal key={item.slug} className={`journey-stop journey-stop--${index + 1}`} delay={index * 0.04}>
                <span className="journey-stop__number">{item.number}</span>
                <div><small>{item.theme}</small><strong>{item.title}</strong></div>
              </MotionReveal>
            ))}
            <div className="journey-finish"><GraduationCap aria-hidden="true" /><strong>Điểm neo mới</strong><span>Một người học chủ động và có trách nhiệm</span></div>
          </div>
          <MotionReveal className="journey-cta">
            <BookOpen aria-hidden="true" />
            <div><span>Tiếp tục chuyến đi</span><strong>Mở từng bài làm nguyên bản</strong></div>
            <Link className="button button--primary" href="/assignments">Đến trang Bài tập <ArrowRight size={18} aria-hidden="true" /></Link>
          </MotionReveal>
        </div>
      </section>
    </PageShell>
  );
}
