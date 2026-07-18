import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">Bỏ qua điều hướng</a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
