"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowDownToLine, ArrowLeft, ArrowRight, Check, ExternalLink, FileText, X } from "lucide-react";
import { assignments, getAssignment, type Assignment } from "@/data/assignments";
import { MotionReveal } from "./MotionReveal";

function DownloadLink({ item, full = false }: { item: Assignment; full?: boolean }) {
  return (
    <a className={full ? "button button--primary" : "button button--secondary"} href={item.downloadPath} download={item.originalFileName}>
      <ArrowDownToLine size={18} aria-hidden="true" /> {full ? "Tải xuống bài tập" : "Tải xuống"}
    </a>
  );
}

export function AssignmentExperience() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const active = activeSlug ? getAssignment(activeSlug) : undefined;

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveSlug(null);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const open = (slug: string) => setActiveSlug(slug);

  return (
    <>
      <div className="assignment-stream">
        <div className="assignment-stream__current" aria-hidden="true" />
        {assignments.map((item, index) => (
          <MotionReveal key={item.slug} className={`assignment-piece assignment-piece--${index + 1}`}>
            <div className="assignment-piece__number">
              <span>{item.number}</span><small>{item.theme}</small>
            </div>
            <button className="assignment-piece__preview" type="button" onClick={() => open(item.slug)} aria-label={`Xem ${item.title}`}>
              <Image src={item.previewImage} alt={`Trang xem trước: ${item.title}`} fill sizes="(max-width: 768px) 92vw, 520px" />
              <span className="preview-ripple" aria-hidden="true" />
              <span className="preview-open"><ExternalLink size={17} aria-hidden="true" /> Mở bài</span>
            </button>
            <div className="assignment-piece__body">
              <div className="assignment-piece__meta">
                <span>{item.fileType}</span><span>{item.fileSize}</span><span className="status"><Check size={14} aria-hidden="true" /> {item.status}</span>
              </div>
              <h2>{item.title}</h2>
              <p className="assignment-piece__subtitle">{item.subtitle}</p>
              <p>{item.description}</p>
              <div className="chip-line" aria-label="Công cụ và kỹ năng">
                {item.tools.slice(0, 3).map((tool) => <span key={tool}>{tool}</span>)}
              </div>
              <div className="button-row">
                <button className="button button--primary" type="button" onClick={() => open(item.slug)}>Xem bài <ArrowRight size={18} aria-hidden="true" /></button>
                <DownloadLink item={item} />
              </div>
            </div>
          </MotionReveal>
        ))}
      </div>

      {active && (
        <div className="viewer-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveSlug(null); }}>
          <div className="viewer" role="dialog" aria-modal="true" aria-labelledby="viewer-title">
            <header className="viewer__header">
              <div className="viewer__index"><span>Bài tập</span><strong>{active.number}</strong></div>
              <div><p>{active.theme}</p><h2 id="viewer-title">{active.title}</h2></div>
              <button ref={closeRef} className="icon-button" type="button" onClick={() => setActiveSlug(null)} aria-label="Đóng trình xem"><X aria-hidden="true" /></button>
            </header>
            <div className="viewer__content">
              <div className="viewer__document">
                {active.fileType === "PDF" ? (
                  <iframe src={`${active.downloadPath}#view=FitH&toolbar=1`} title={`Tài liệu ${active.title}`} loading="lazy" />
                ) : (
                  <div className="docx-preview" aria-label="Bản xem trước nội dung DOCX">
                    <p className="eyebrow">Bản xem trước nội dung thật</p>
                    <h3>Tìm kiếm và đánh giá thông tin học thuật</h3>
                    <p><strong>Chủ đề lựa chọn:</strong> “Việc học Tiếng Anh trong kỷ nguyên số”</p>
                    <div className="docx-table" role="table" aria-label="Một số nguồn được đánh giá">
                      <div role="row"><strong role="columnheader">Nguồn</strong><strong role="columnheader">Xếp hạng</strong></div>
                      <div role="row"><span role="cell">English Learning in the Digital Age · Springer</span><b role="cell">01</b></div>
                      <div role="row"><span role="cell">English Language and Digital Literacy · JIERS</span><b role="cell">02</b></div>
                      <div role="row"><span role="cell">Digital Age Teaching for English Learners · Wiley</span><b role="cell">03</b></div>
                      <div role="row"><span role="cell">Project-based learning in teaching English · VNU</span><b role="cell">04</b></div>
                    </div>
                    <p className="docx-note">Tệp gốc gồm bảng đánh giá 10 nguồn và danh mục tài liệu tham khảo. Tải DOCX để xem đầy đủ định dạng.</p>
                  </div>
                )}
              </div>
              <aside className="viewer__aside">
                <p>{active.viewerSummary}</p>
                <div className="viewer__file"><FileText aria-hidden="true" /><div><span>Tệp nguyên bản</span><strong>{active.originalFileName}</strong><small>{active.fileType} · {active.fileSize}</small></div></div>
                <ul>{active.keyPoints.map((point) => <li key={point}><Check size={16} aria-hidden="true" />{point}</li>)}</ul>
                <DownloadLink item={active} full />
                {active.fileType === "PDF" && <a className="viewer__newtab" href={active.downloadPath} target="_blank" rel="noreferrer">Mở PDF ở tab mới <ExternalLink size={15} aria-hidden="true" /></a>}
              </aside>
            </div>
            <footer className="viewer__nav">
              {active.previousSlug ? <button type="button" onClick={() => open(active.previousSlug!)}><ArrowLeft aria-hidden="true" /><span>Bài trước</span></button> : <span />}
              <button className="viewer__all" type="button" onClick={() => setActiveSlug(null)}>Về tất cả bài tập</button>
              {active.nextSlug ? <button type="button" onClick={() => open(active.nextSlug!)}><span>Bài tiếp theo</span><ArrowRight aria-hidden="true" /></button> : <Link href="/summary"><span>Đến Tổng kết</span><ArrowRight aria-hidden="true" /></Link>}
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
