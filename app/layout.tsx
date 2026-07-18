import type { Metadata } from "next";
import "@fontsource/be-vietnam-pro/300.css";
import "@fontsource/be-vietnam-pro/400.css";
import "@fontsource/be-vietnam-pro/500.css";
import "@fontsource/be-vietnam-pro/600.css";
import "@fontsource/be-vietnam-pro/700.css";
import "@fontsource/newsreader/400.css";
import "@fontsource/newsreader/400-italic.css";
import "@fontsource/newsreader/500.css";
import "@fontsource/newsreader/600.css";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: { default: `${profile.fullName} — Portfolio học tập`, template: `%s · ${profile.fullName}` },
  description: `Portfolio học tập của ${profile.fullName}, lớp ${profile.className}, ngành ${profile.major}.`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
