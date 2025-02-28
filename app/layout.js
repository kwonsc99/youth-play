// app/layout.js
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Youth Play - 재미있는 게임 모음",
  description: "다양한 게임을 즐길 수 있는 Youth Play",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header className="header">
          <div className="headerContainer">
            <Link href="/" className="logo">
              Youth Play
            </Link>
            <nav className="nav">
              <Link href="/" className="navLink">
                홈
              </Link>
              <Link href="/about" className="navLink">
                소개
              </Link>
              <Link href="/contact" className="navLink">
                문의
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()} Youth Play. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
