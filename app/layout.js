"use client";

import BlochSphere from './blochsphere';
import Image from 'next/image';
import './globals.css';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <main className="main-content">
            <header className="header">
              <h1 className="blog-title">
                <Link href="/">Mark Deaconu</Link>
              </h1>
              <div className="social-links">
                {/* CV Icon */}
                <Link href="/cv" className="social-link">
                  <Image src="/images/cvlogo3.png" alt="CV" width={24} height={24} />
                </Link>

                {/* GitHub Icon */}
                <a
                  href="https://github.com/MarkNDeaconu"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/githublogo2.png" alt="GitHub" width={24} height={24} />
                </a>

                {/* YouTube Icon */}
                <a
                  href="https://www.youtube.com/@markdeaconu1245"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/youtubelogo2.webp" alt="YouTube" width={24} height={24} />
                </a>

                {/* LinkedIn Icon */}
                <a
                  href="https://www.linkedin.com/in/mark-deaconu-621b44220/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/linkedinlogo.webp" alt="LinkedIn" width={24} height={24} />
                </a>
              </div>
            </header>
            <div className="container">{children}</div>
          </main>
          <div className="bloch-sphere">
            <BlochSphere />
          </div>
        </div>
      </body>
    </html>
  );
}
















