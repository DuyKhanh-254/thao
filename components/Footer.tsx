import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div>
          <span className="footer__mark">{profile.initials}</span>
          <p>{profile.fullName} · {profile.studentId}</p>
          <p>{profile.major}</p>
        </div>
        <div className="footer__links" aria-label="Liên kết cuối trang">
          <Link href="/">Trang chủ</Link>
          <Link href="/assignments">Bài tập</Link>
          <Link href="/summary">Tổng kết <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
        <p className="footer__note">Một hành trình học tập được kể bằng nhịp sóng, dữ liệu thật và sáu bài làm nguyên bản.</p>
      </div>
    </footer>
  );
}
