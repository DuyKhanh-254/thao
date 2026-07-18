import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AssignmentExperience } from "@/components/AssignmentExperience";
import { MotionReveal } from "@/components/MotionReveal";

export const metadata: Metadata = {
  title: "Bài tập",
  description: "Sáu bài tập nguyên bản trong hành trình học tập của Nguyễn Thị Diệu Thảo.",
};

export default function AssignmentsPage() {
  return (
    <PageShell>
      <header className="page-hero assignments-hero">
        <div className="shell page-hero__grid">
          <MotionReveal>
            <p className="kicker"><span /> Bộ sưu tập bài làm</p>
            <h1>Sáu điểm neo<br /><em>trên đường học.</em></h1>
          </MotionReveal>
          <MotionReveal className="page-hero__aside" delay={0.1}>
            <p>Mỗi bài là một bước dịch chuyển: từ thao tác số nền tảng tới nghiên cứu, hợp tác, thuyết trình và liêm chính AI.</p>
            <div><strong>06</strong><span>bài nguyên bản<br />5 PDF · 1 DOCX</span></div>
          </MotionReveal>
        </div>
        <div className="page-hero__wave" aria-hidden="true" />
      </header>
      <section className="assignments-section" aria-label="Danh sách sáu bài tập">
        <div className="shell">
          <AssignmentExperience />
        </div>
      </section>
    </PageShell>
  );
}
